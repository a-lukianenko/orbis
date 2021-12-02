import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export const highlightMatch = (
  text: string,
  search: string,
  className: string
) => {
  const matches = match(text, search);
  const parts = parse(text, matches);

  return (
    <div>
      {parts.map((part, index) => (
        <span key={index} className={part.highlight ? className : ""}>
          {part.text}
        </span>
      ))}
    </div>
  );
};
