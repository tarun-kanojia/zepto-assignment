import React from "react";
import {
  Avatar,
  AvatarAndTitleContainer,
  AvatarContainer,
  ChipContainer,
  DeleteButtonContainer,
  DeleteIcon,
  Description,
  ListContainer,
  Title,
} from "./styledComponents";
import {
  ItemWithDetailsProps,
  ItemWithDetailsView,
} from "../../types/ItemWithDetails";

export default function ItemWithUserDetails(props: ItemWithDetailsProps) {
  const {
    avatarURL: profileURL,
    title: name,
    description,
    view,
    id,
    onDelete,
    onClick,
    active = false,
  } = props;

  const handleOnDelete = (): void => {
    onDelete && onDelete(id);
  };

  const handleOnClick = (): void => {
    onClick && onClick(id);
  };

  const renderDeleteButton = () => {
    return view === ItemWithDetailsView.CHIP ? (
      <DeleteButtonContainer aria-label="delete" onClick={handleOnDelete} active={active}>
        {/* <DeleteIcon src="close-icon.png" alt="" /> */}
        {"X"}
      </DeleteButtonContainer>
    ) : null;
  };

  const renderAvatar = () => {
    return (
      <AvatarContainer>
        <Avatar src={profileURL} alt="" />
      </AvatarContainer>
    );
  };

  const renderUIBasedOnView = () => {
    if (view === ItemWithDetailsView.CHIP) {
      return (
        <ChipContainer active={active}>
          {renderAvatar()}
          <Title>{name}</Title>
          {renderDeleteButton()}
        </ChipContainer>
      );
    }

    return (
      <ListContainer onClick={handleOnClick}>
        <AvatarAndTitleContainer>
          {renderAvatar()}
          <Title>{name}</Title>
        </AvatarAndTitleContainer>
        <Description>{description}</Description>
      </ListContainer>
    );
  };

  return renderUIBasedOnView();
}
