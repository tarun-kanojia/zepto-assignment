import styled from "styled-components";

export const OptionsContainer = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  padding: 16px;
  box-shadow: 0px 0px 10px 0px purple;
  max-height: 200px;
  overflow-y: auto;
  gap: 5px;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  outline: none;
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  text-transform: capitalize;
  :focus {
    outline: blue;
    border: none;
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const SelectedOptionsWithInputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  gap: 10px;

  
`;
