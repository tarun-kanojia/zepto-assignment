import React, { useEffect } from "react";
import ItemWithUserDetails from "../ItemWithUserDetails";
import { ItemDetails, ItemWithDetailsView } from "../../types/ItemWithDetails";
import {
  Container,
  InputField,
  InputFieldContainer,
  OptionsContainer,
  SelectedOptionsWithInputFieldContainer,
} from "./styledComponents";
import { BACK_SPACE } from "../../constants/KeyDownCodes";
import {
  BACK_SPACE_KEYDOWN_COUNT,
  EMPTY,
  REMOVE_INDEX_VALUE,
} from "./constant";

interface MultiSelectDropDownProps {
  optionList: ItemDetails[];
  onChangeInputField: (data: string) => void;
}

export default function MultiSelectDropDown(props: MultiSelectDropDownProps) {
  const { optionList, onChangeInputField } = props;

  const [selectedOptions, setSelectedOptions] = React.useState<
    Array<ItemDetails>
  >([]);

  const [inputValue, setInputValue] = React.useState("");
  const [shouldOpenDropDown, setShouldOpenDropDown] = React.useState(false);
  const [selectLastChip, setSelectLastChip] = React.useState(false);
  const backSpaceKeyDownCountRef = React.useRef<number>(EMPTY);
  const inputFieldRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.length > EMPTY && getFilteredList().length > EMPTY) {
      setShouldOpenDropDown(true);
    } else {
      setShouldOpenDropDown(false);
    }
  }, [inputValue]);

  const onChangeInputValue = (e: any) => {
    setInputValue(e.target.value);
    onChangeInputField(e.target.value);
  };

  const handleOnDeleteChip = (id: string): void => {
    setSelectedOptions(selectedOptions.filter((option) => option.id !== id));
  };

  const handleBackSpaceKeyDownCount = () => {
    if (inputValue.length === EMPTY) {
      backSpaceKeyDownCountRef.current += 1;
    }
  };

  const handleOnBackspace = (e: any): void => {
    handleBackSpaceKeyDownCount();

    if (selectedOptions.length > EMPTY) {
      if (
        backSpaceKeyDownCountRef.current ===
        BACK_SPACE_KEYDOWN_COUNT.FIRST_TRIGGER
      ) {
        setSelectLastChip(true);
      } else if (
        backSpaceKeyDownCountRef.current ===
          BACK_SPACE_KEYDOWN_COUNT.SECOND_TRIGGER ||
        selectLastChip
      ) {
        setSelectedOptions(selectedOptions.slice(0, REMOVE_INDEX_VALUE));
      }
    }
  };

  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === BACK_SPACE) {
      handleOnBackspace(e);
    }
  };

  const handleOnFocus = () => {
    setSelectLastChip(false);
    backSpaceKeyDownCountRef.current = EMPTY;
  };

  const getFilteredList = () => {
    return optionList.filter(
      (option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedOptions.some(
          (selectedOption) => selectedOption.id === option.id
        )
    );
  };


  const renderInputField = () => {
    return (
      <InputFieldContainer>
        <InputField
          ref={inputFieldRef}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={handleOnKeyDown}
          onFocus={handleOnFocus}
        />
      </InputFieldContainer>
    );
  };

  const handleOnClickOption = (option: ItemDetails) => {
    if (selectedOptions.some((ele) => ele.id === option.id)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderListOption = (
    details: ItemDetails,
    type = ItemWithDetailsView.LIST,
    active: boolean = false
  ) => {
    const { id, name, email, imgURL } = details;
    return (
      <ItemWithUserDetails
        key={id}
        id={id}
        view={type}
        avatarURL={imgURL}
        title={name}
        description={email}
        onClick={(id: string) => handleOnClickOption(details)}
        onDelete={() => handleOnDeleteChip(id)}
        active={active}
      />
    );
  };

 
  const renderOptions = () => {
    const list = getFilteredList();
    return (
      <OptionsContainer>
        {list.map((option) => renderListOption(option))}
      </OptionsContainer>
    );
  };

  const renderSelectedOptions = () => {
    return selectedOptions.map((option, index) =>
      renderListOption(
        option,
        ItemWithDetailsView.CHIP,
        selectedOptions.length - 1 === index && selectLastChip
      )
    );
  };

  return (
    <Container>
      <SelectedOptionsWithInputFieldContainer>
        {renderSelectedOptions()}
        {renderInputField()}
      </SelectedOptionsWithInputFieldContainer>
      {shouldOpenDropDown && getFilteredList().length ? renderOptions() : null}
    </Container>
  );
}
