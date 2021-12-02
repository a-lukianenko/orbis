import Box from "@material-ui/core/Box/Box";

export type AddressMapProps = Pick<TickerDetails, "hq_address">;

export const AddressMap = <T extends AddressMapProps>({ hq_address }: T) => {
  const URIencoded = encodeURI(hq_address);

  return (
    <section>
      <Box component='h3' fontSize='0'>
        Address map
      </Box>
      <iframe
        src={`https://www.google.com/maps?q=${URIencoded}&output=embed`}
        width='100%'
        style={{ border: 0 }}
        title='address'
      ></iframe>
    </section>
  );
};
