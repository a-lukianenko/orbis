import Box from "@material-ui/core/Box/Box";

type Props = { address: string };

export const AddressMap = ({ address }: Props) => {
  const URIencoded = encodeURI(address);

  return (
    <section>
      <Box component='h3' fontSize='0'>
        Address map
      </Box>
      <iframe
        src={`https://www.google.com/maps?q=${URIencoded}&output=embed`}
        width='508'
        height='164'
        style={{ border: 0 }}
        title='address'
      ></iframe>
    </section>
  );
};
