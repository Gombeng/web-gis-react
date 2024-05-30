export default function Header({ ...rest }) {
  return (
    <div
      style={{
        padding: ".8rem",
        zIndex: "9999",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
      }}
      {...rest}
    >
      <h4>
        GIS App <br /> Tourist Attraction & Spreads of Drugs
      </h4>

      <p>Note: Hover colored area to see detail.</p>
    </div>
  );
}
