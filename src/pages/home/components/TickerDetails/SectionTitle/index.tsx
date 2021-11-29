import Box from "@material-ui/core/Box/Box";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <div>
      <Box component='h3' fontSize='18px' fontWeight='bold'>
        {children}
      </Box>
    </div>
  );
};
