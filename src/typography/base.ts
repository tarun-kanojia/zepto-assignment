import styled from "styled-components";

const BaseComponent = styled.span`
  font-family: "Inter", sans-serif;
`;

export const HeadingNormal = styled(BaseComponent)`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;

export const ParagraphNormal = styled(BaseComponent)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
