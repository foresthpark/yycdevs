export const parseName = (name: string): string => {
  if (!name) return "";
  const [firstName, lastName] = name.split(" ");
  const parsedFirstName = firstName?.charAt(0);
  const parsedLastName = lastName?.charAt(0);
  if (!parsedFirstName || !parsedLastName) return "";
  return parsedFirstName + parsedLastName;
};
