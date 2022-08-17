import React from 'react';
import styled from 'styled-components';
import thumbnail from '../images/2.jpg';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};

  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px 0px 5px 0px;
`;
const Text = styled.span`
  font-size: 14px;
`;

export default function Comment() {
  return (
    <Container>
      <Avatar src={thumbnail} />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
          consectetur.
        </Text>
      </Details>
    </Container>
  );
}
