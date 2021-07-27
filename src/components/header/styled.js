import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 4px;
    background-color: #225ed8;

    input{
        border: 0px solid #ccc;
        border-radius: 8px;
        width: 20%;
        height: 44px;
        margin-right: 8px;
        padding: 8px;
        font-weight: 500; 
        background-color:#ccc;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

        &:focus{
          border: 1px solid #ccc;
        }

        &:hover {
            border: 1px solid #ccc;
        }
    }

    button {
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2)
        }

        span{
            font-weight: bold;
            color: #ffff;
        }
    }
`;


