type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl m-auto px-4 scroll-smooth">{children}</div>
  );
}

export default Container;
