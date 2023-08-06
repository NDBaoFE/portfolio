import styled from "styled-components";
import { Col, Form, Input, Layout, Menu } from "antd";
import { Tree } from "antd";
import { Tabs } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Checkbox } from "antd";
const { TextArea } = Input;
const { Sider } = Layout;
export const Container = styled.div`
    background: #011627;
    border: 1px solid #1e2d3d;
    border-radius: 8px;
    min-height: 100vh;
`;
export const StyledSider = styled(Sider)`
    .ant-menu-dark .ant-menu-item-selected,
    .ant-menu-dark > .ant-menu .ant-menu-item-selected {
        background-color: transparent;
        border: 1px solid #1e2d3d;
    }
    .ant-menu-dark,
    .ant-menu-dark > .ant-menu {
        background-color: transparent;
    }
    min-height: calc(100vh);
    border-right: 1px solid #1e2d3d;
    height: calc(100vh - 105px);
    .ant-menu .ant-menu-item,
    .ant-menu .ant-menu-submenu,
    .ant-menu .ant-menu-submenu-title {
        border-radius: 1px;
    }
`;
export const StyledMenu = styled(Menu)``;
export const StyledTree = styled(Tree)`
    background-color: transparent;
    width: 221px;
    border-right: 1px solid #1e2d3d;
    border-radius: 0;
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    height: 100%;
    color: #607b96;
    transition: all 0.3s ease;
    .ant-tree-node-content-wrapper.ant-tree-node-selected,
    .ant-tree-checkbox + span.ant-tree-node-selected {
        background-color: transparent;
        color: #fefefe;
    }
    .ant-tree-title {
        div {
            display: flex;
            align-items: center;
            svg,
            img {
                margin-right: 5px;
            }
        }
    }
`;
export const StyledTabs = styled(Tabs)`
    transition: all 0.3s ease;
    height: calc(100vh - 105px);
    font-family: "Fira Code";
    font-style: normal;
    .ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
    .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
        border-radius: 0;
    }

    .ant-tabs-nav-list div {
        min-width: 150px;
        height: 25px;
        color: #607b96;
        border-radius: 0 !important;
        border: 1px solid #1e2d3d !important;
        margin: 0 !important;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: white !important;
    }
    .ant-tabs-nav-list .ant-tabs-tab-active {
        background-color: transparent !important;
    }
    .ant-tabs-nav-list div div {
        border: none !important;
    }
    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
    .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
        border-radius: 0;
    }
    .ant-tabs-nav .ant-tabs-nav-add,
    div > .ant-tabs-nav .ant-tabs-nav-add {
        border-radius: 0;
        border: 1px solid #1e2d3d;
    }
    .ant-tabs-tab-remove {
        color: white;
    }
    .ant-tabs-content,
    .ant-tabs-content-top {
        font-family: "Fira Code";
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        color: #607b96;
    }
    .anticon,
    .anticon-plus {
        color: white;
    }
`;
export const StyleIDE = styled(SyntaxHighlighter)`
    background-color: transparent !important;
    margin-left: 30px;
    pre {
        background-color: transparent;
    }
    code {
        text-shadow: none !important;
    }
`;
export const StyledCheckbox = styled(Checkbox)`
    color: #fefefe !important;
    .ant-checkbox-group {
    }
    .ant-checkbox {
        color: #fefefe !important;
    }
    .ant-checkbox-wrapper {
        color: #fefefe !important;
    }
`;
export const StyledCol = styled(Col)`
    color: #fefefe;
    margin: 5px 0;
    .ant-checkbox-wrapper {
        color: #607b96;
        font-family: "Fira Code";
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 150%;
    }

    .ant-checkbox-inner {
        background: #607b96;
        border-color: #607b96;
    }
    .ant-checkbox-inner:hover + span {
        background: #607b96;
        border-color: #607b96;
    }
    input[type="checkbox"]:hover {
        background-color: #e6e6e6; /* Set the background color */
        border-color: #b3b3b3; /* Set the border color */
    }
`;
export const StyledContactTree = styled(StyledTree)`
    word-wrap: break-word;
    width: 300px;
    .ant-tree-indent {
        display: none;
    }
    .ant-tree-node-content-wrapper {
        svg {
            font-size: 20px;
        }
    }
`;
export const StyledInput = styled(Input)`
    width: 100%;
    height: 41px;
    background: transparent;
    border-color: #1e2d3d;
    color: #6a8fb6;
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    ::placeholder {
        color: #1e2d2d;
    }
    &:hover {
        border-color: #1e2d3d;
    }
`;
export const StyledTextArea = styled(TextArea)`
    background: transparent;
    border-color: #1e2d3d;
    color: #6a8fb6;
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    ::placeholder {
        color: #607b96;
    }
    &:hover {
        border-color: #1e2d3d;
    }
`;
export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    justify-content: center;
    .ant-form-item {
        width: 100%;
    }
    .ant-input:hover {
        border-color: #1e2d3d;
    }
    h5 {
        font-family: "Fira Code";
        font-style: normal;
        font-weight: 450;
        font-size: 16px;
        line-height: 21px;
        /* identical to box height */

        color: #607b96;
        margin-bottom: 10px;
    }
`;
