type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col justify-center items-center min-h-screen select-none">
    {children}
  </div>
)

export default Layout
