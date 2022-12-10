import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export function Hero() {
  return (
    <OverlayScrollbarsComponent defer>
      <div style={{whiteSpace: 'nowrap'}}>
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
        <img alt="test" src="https://dummyimage.com/530x441" />
      </div>
    </OverlayScrollbarsComponent>
  )
}
