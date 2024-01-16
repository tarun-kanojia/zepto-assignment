import styled from "styled-components";
import { HeadingNormal, ParagraphNormal } from "../../typography/base";

interface Base {
  active?: boolean;
}

interface ChipContainerProps extends Base {}

export const ChipContainer = styled.div<ChipContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? "grey" : "rgb(128, 128,128,64%)"};
  padding: 5px;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const AvatarAndTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const AvatarContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Title = styled(HeadingNormal)`
  text-transform: captalize;
  color: black;
`;

export const Description = styled(ParagraphNormal)`
  color: grey;
`;

interface DeleteButtonContainerProps extends Base {}

export const DeleteButtonContainer = styled.div<DeleteButtonContainerProps>`
  width: 25px;
  height: 25px;
  background-color: ${(props) =>
    props.active ? "grey" : "rgb(128, 128,128,64%)"};
  border-radius: 50%;
`;

export const DeleteIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
