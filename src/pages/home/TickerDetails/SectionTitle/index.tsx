import Box from "@material-ui/core/Box/Box";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <Box component='h3' fontSize='18px' fontWeight='bold'>
      {children}
    </Box>
  );
};
