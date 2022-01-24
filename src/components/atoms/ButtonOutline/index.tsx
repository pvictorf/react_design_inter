import styled from 'styled-components'

interface Props {
  title: string,
  role?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Outline = styled.button`
  display: block;
  padding: 0.8rem 1.1rem;
  width: 100%;
  border: 1px solid rgb(255, 122, 0);
  border-radius: 8px;
  background: #fff;
  color: rgb(255, 122, 0);
  font-size: 1.1.rem;
  font-weight: 600;
`;

export const ButtonOutline = ({title, role, onClick}: Props) => {
  return (
    <Outline role={role} onClick={onClick}>
      {title}
    </Outline>
  )
}