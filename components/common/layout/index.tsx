type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col justify-center items-center p-8 min-h-screen select-none">
    {children}
  </div>
)

export default Layout
