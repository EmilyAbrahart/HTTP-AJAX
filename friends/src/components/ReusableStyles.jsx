
export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

export const Button = (backgroundColor, color) => {
  return `
  background-color: ${backgroundColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${color};
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${color}};
  

  &:hover {
    color: ${backgroundColor};
    background-color: ${color};
    border: 2px solid ${backgroundColor};
  }
  `
};