import Button from "@material-ui/core/Button/Button";
import { theme } from "theme";
import { SectionTitle } from "../SectionTitle";

export type TagsProps = Pick<TickerDetails, "tags">;

export const Tags = <T extends TagsProps>({ tags }: T) => {
  return (
    <section>
      <SectionTitle>Tags</SectionTitle>
      {tags.map((tag, i) => {
        return (
          <Button
            key={tag}
            size='small'
            style={{
              marginRight: 20,
              color: "#fff",
              textTransform: "none",
              cursor: "default",
              backgroundColor:
                i % 2
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
            }}
          >
            {tag}
          </Button>
        );
      })}
    </section>
  );
};
