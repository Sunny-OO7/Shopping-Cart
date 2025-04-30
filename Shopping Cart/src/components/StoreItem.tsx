import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "350px", objectFit: "cover", width: "100%" }}
      />
    </Card>
  );
}
