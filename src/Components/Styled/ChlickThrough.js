import styled from '@emotion/styled';

const ClickThrough = styled.div`
    background: rgba(39, 48, 67, .9);
    margin: 20px auto;
    height: 250px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skew(10deg);
    transition: 800ms cubic-bezier(.83,.04,.24,.87);

    &:hover {
        transform: skew(-10deg);
    }


`

export default ClickThrough;
