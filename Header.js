import { forwardRef } from "react";


const Header = forwardRef((props, ref) => {
  const {autoScroll} = props
  return (
    <div className="header_top" ref={ref.headerRef}>
      <button onClick={() => autoScroll(ref.footerRef)}>Вниз</button>
    </div>
  )
})
export default Header 