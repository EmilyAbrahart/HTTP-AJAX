
export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

export const Button = (backgroundColor) => {
  return `
  background-color: ${backgroundColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #bb1233;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid #bb1233;
  

  &:hover {
    color: ${backgroundColor};
    background-color: #bb1233;
    border: 2px solid ${backgroundColor};
  }
  `
};