interface NxStatic {
  RwJson: {
    read: (path: string) => any;
    write: (path: string, data: any) => void;
  };
}
