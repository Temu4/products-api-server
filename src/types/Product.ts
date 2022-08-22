export type ProductType = {
  id: number;
  category: string;
  imgUrl: string;
  name: string;
  display: number;
  color: string[];
  price: number;
  chip: {name: string; cores: number};
  ram: number;
  storage: number;
  touchId: boolean;
  faceId: boolean;
  wireless: string[];
  camera: {front: string | null; back: string | null};
  audio: {
    microphone: string | null;
    speakers: string | null;
  };
  size: {height: string; width: string; depth: string; weight: string};
  os: string;
  InTheBox: string[];
  orderInfo: {inStock: number; reviews: number};
};
