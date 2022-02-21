import styled from 'styled-components';

interface UserAvatarProps {
  avatarUrl: string;
}

export const Avatar = styled.div`
  background-image: url(${(componentsProps: UserAvatarProps) => componentsProps.avatarUrl});
  background-color: #fff;
  background-position: center center;
  background-size: 40px 40px;
  border: 0;
  border-radius: 50%;
  display: block;
  margin: 0;
  position: relative;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
