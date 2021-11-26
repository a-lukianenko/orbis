type Props = { address: string };

export const AddressMap = ({ address }: Props) => {
  const URIencoded = encodeURI(address);

  return (
    <div>
      <iframe
        src={`https://www.google.com/maps?q=${URIencoded}&output=embed`}
        width='508'
        height='164'
        style={{ border: 0 }}
        title='address'
      ></iframe>
    </div>
  );
};
