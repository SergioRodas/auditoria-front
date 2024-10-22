import styled from "styled-components";
import { colors } from "../colors";
interface DropdownContainerProps {
  width: string;
}

export const DropdownContainer = styled.div<DropdownContainerProps>`
  margin-top: 1px;
  .content__placeholder{
    font-size: 18px;
    color: ${colors.secondaryColor};
  }
  .dropdown---area {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    align-content: center;
    text-align: center;
    .btnStart {
      margin-right: 8px;
    }
    .btnEnd {
      margin-left: 8px;
    }
    .btnEndNotExist {
      margin: 0;
    }
  }
  .disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  ul {
    padding: 0px !important;
  }
  .dropdown---content {
    p {
      margin: 0px !important;
    }
  }
  .dropdown---not-content {
    padding-right: 0px;
    p {
      margin: 0px !important;
    }
  }
  .dropdown---list {
    position: absolute;
    top: 60px;
    right: 40px;
    z-index: 1;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 2px 2px 8px 0px #00000014;
    :hover {
      background: ${colors.gray};
    }
    li {
      height: 45px;
      display: flex;
      button {
        width: 100%;
        display: flex;
        align-items: center;
        border: none;
        background: none;
        outline: none;
        margin: 5px;
        p {
          font-size: 14px;
          color: ${colors.secondaryColor};
          margin-top: 15px;
          white-space: nowrap;
        }
        span {
          height: 50px;
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    hr {
      margin: 0px !important;
    }
  }
`;
export const Tag = styled.div``;