import React from 'react';
import styled from 'styled-components';
import thumbnail from '../images/2.jpg';
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export default function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={thumbnail} />
        <Input placeholder="Add a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}
