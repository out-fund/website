const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-md flex rounded-3xl border-none bg-cobalt px-[24px] pb-[7px] pt-[9px] font-semibold leading-8 text-white antialiased hover:underline hover:outline-none focus:underline focus:outline-2 focus:outline-offset-2">
      {children}
    </button>
  )
}

export default Button
