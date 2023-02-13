import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Testimonial } from "@atrilabs/react-component-manifests/src/manifests/Testimonial/Testimonial.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useDiv32Cb, useFlex16Cb, useDiv33Cb, useDiv34Cb, useDiv35Cb, useDiv36Cb, useFlex17Cb, useDiv37Cb, useDiv38Cb, useDiv39Cb, useDiv40Cb, useDiv41Cb, useFlex18Cb, useDiv42Cb, useDiv44Cb, useDiv43Cb, useDiv47Cb, useDiv48Cb, useDiv50Cb, useDiv51Cb, useFlex19Cb, useDiv52Cb, useDiv53Cb, useDiv54Cb, useFlex20Cb, useDiv55Cb, useDiv56Cb, useFlex21Cb, useDiv60Cb, useDiv61Cb, useFlex22Cb, useDiv62Cb, useDiv63Cb, useDiv64Cb, useDiv65Cb, useFlex24Cb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useTextBox26Cb, useFlex34Cb, useTextBox25Cb, useImage6Cb, useTextBox27Cb, useTextBox28Cb, useImage8Cb, useTextBox31Cb, useTextBox34Cb, useImage9Cb, useTextBox32Cb, useTextBox35Cb, useImage10Cb, useTextBox33Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useImage11Cb, useTextBox39Cb, useTextBox40Cb, useImage12Cb, useTextBox41Cb, useTextBox42Cb, useImage13Cb, useTextBox43Cb, useTextBox44Cb, useImage14Cb, useButton22Cb, useButton23Cb, useTextBox46Cb, useTextBox47Cb, useButton24Cb, useButton25Cb, useTextBox45Cb, useImage15Cb, useTextBox49Cb, useTextBox50Cb, useTestimonial1Cb, useButton27Cb, useButton28Cb, useTextBox67Cb, useTextBox68Cb, useTextBox60Cb, useInput13Cb, useTextBox54Cb, useInput3Cb, useTextBox55Cb, useInput4Cb, useTextBox62Cb, useInput9Cb, useInput10Cb, useTextBox63Cb, useTextBox64Cb, useInput11Cb, useInput12Cb, useTextBox65Cb, useTextBox66Cb, useButton30Cb, useTextBox70Cb, useButton32Cb, useImage21Cb, useImage22Cb, useImage24Cb, useImage25Cb, useImage26Cb, useImage27Cb } from "../page-cbs/home2";
import "../page-css/home2.css";
import "../custom/home2";

export default function Home2() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div32Props = useStore((state)=>state["home2"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["home2"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Flex16Props = useStore((state)=>state["home2"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["home2"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div33Props = useStore((state)=>state["home2"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["home2"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div34Props = useStore((state)=>state["home2"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["home2"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Div35Props = useStore((state)=>state["home2"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["home2"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Div36Props = useStore((state)=>state["home2"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["home2"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Flex17Props = useStore((state)=>state["home2"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["home2"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div37Props = useStore((state)=>state["home2"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["home2"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div38Props = useStore((state)=>state["home2"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["home2"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Div39Props = useStore((state)=>state["home2"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["home2"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Div40Props = useStore((state)=>state["home2"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["home2"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["home2"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["home2"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Flex18Props = useStore((state)=>state["home2"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["home2"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Div42Props = useStore((state)=>state["home2"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["home2"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div44Props = useStore((state)=>state["home2"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["home2"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div43Props = useStore((state)=>state["home2"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["home2"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Div47Props = useStore((state)=>state["home2"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["home2"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div48Props = useStore((state)=>state["home2"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["home2"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Div50Props = useStore((state)=>state["home2"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["home2"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["home2"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["home2"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Flex19Props = useStore((state)=>state["home2"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["home2"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Div52Props = useStore((state)=>state["home2"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["home2"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Div53Props = useStore((state)=>state["home2"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["home2"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Div54Props = useStore((state)=>state["home2"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["home2"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Flex20Props = useStore((state)=>state["home2"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["home2"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div55Props = useStore((state)=>state["home2"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["home2"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Div56Props = useStore((state)=>state["home2"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["home2"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Flex21Props = useStore((state)=>state["home2"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["home2"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Div60Props = useStore((state)=>state["home2"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["home2"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div61Props = useStore((state)=>state["home2"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["home2"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Flex22Props = useStore((state)=>state["home2"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["home2"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Div62Props = useStore((state)=>state["home2"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["home2"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Div63Props = useStore((state)=>state["home2"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["home2"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Div64Props = useStore((state)=>state["home2"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["home2"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div65Props = useStore((state)=>state["home2"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["home2"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Flex24Props = useStore((state)=>state["home2"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["home2"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex30Props = useStore((state)=>state["home2"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["home2"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["home2"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["home2"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["home2"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["home2"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const TextBox26Props = useStore((state)=>state["home2"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["home2"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Flex34Props = useStore((state)=>state["home2"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["home2"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const TextBox25Props = useStore((state)=>state["home2"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["home2"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image6Props = useStore((state)=>state["home2"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["home2"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox27Props = useStore((state)=>state["home2"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["home2"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["home2"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["home2"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Image8Props = useStore((state)=>state["home2"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["home2"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox31Props = useStore((state)=>state["home2"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["home2"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox34Props = useStore((state)=>state["home2"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["home2"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image9Props = useStore((state)=>state["home2"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["home2"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox32Props = useStore((state)=>state["home2"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["home2"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox35Props = useStore((state)=>state["home2"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["home2"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image10Props = useStore((state)=>state["home2"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["home2"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox33Props = useStore((state)=>state["home2"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["home2"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox36Props = useStore((state)=>state["home2"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["home2"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["home2"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["home2"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["home2"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["home2"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image11Props = useStore((state)=>state["home2"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["home2"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox39Props = useStore((state)=>state["home2"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["home2"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["home2"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["home2"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Image12Props = useStore((state)=>state["home2"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["home2"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox41Props = useStore((state)=>state["home2"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["home2"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["home2"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["home2"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image13Props = useStore((state)=>state["home2"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["home2"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox43Props = useStore((state)=>state["home2"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["home2"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["home2"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["home2"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image14Props = useStore((state)=>state["home2"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["home2"]["Image14"]);
const Image14Cb = useImage14Cb()
const Button22Props = useStore((state)=>state["home2"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["home2"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["home2"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["home2"]["Button23"]);
const Button23Cb = useButton23Cb()
const TextBox46Props = useStore((state)=>state["home2"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["home2"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["home2"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["home2"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Button24Props = useStore((state)=>state["home2"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["home2"]["Button24"]);
const Button24Cb = useButton24Cb()
const Button25Props = useStore((state)=>state["home2"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["home2"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox45Props = useStore((state)=>state["home2"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["home2"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image15Props = useStore((state)=>state["home2"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["home2"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox49Props = useStore((state)=>state["home2"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["home2"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["home2"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["home2"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Testimonial1Props = useStore((state)=>state["home2"]["Testimonial1"]);
const Testimonial1IoProps = useIoStore((state)=>state["home2"]["Testimonial1"]);
const Testimonial1Cb = useTestimonial1Cb()
const Button27Props = useStore((state)=>state["home2"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["home2"]["Button27"]);
const Button27Cb = useButton27Cb()
const Button28Props = useStore((state)=>state["home2"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["home2"]["Button28"]);
const Button28Cb = useButton28Cb()
const TextBox67Props = useStore((state)=>state["home2"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["home2"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["home2"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["home2"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox60Props = useStore((state)=>state["home2"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["home2"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Input13Props = useStore((state)=>state["home2"]["Input13"]);
const Input13IoProps = useIoStore((state)=>state["home2"]["Input13"]);
const Input13Cb = useInput13Cb()
const TextBox54Props = useStore((state)=>state["home2"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["home2"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Input3Props = useStore((state)=>state["home2"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["home2"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox55Props = useStore((state)=>state["home2"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["home2"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Input4Props = useStore((state)=>state["home2"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["home2"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox62Props = useStore((state)=>state["home2"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["home2"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Input9Props = useStore((state)=>state["home2"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["home2"]["Input9"]);
const Input9Cb = useInput9Cb()
const Input10Props = useStore((state)=>state["home2"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["home2"]["Input10"]);
const Input10Cb = useInput10Cb()
const TextBox63Props = useStore((state)=>state["home2"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["home2"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["home2"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["home2"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Input11Props = useStore((state)=>state["home2"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["home2"]["Input11"]);
const Input11Cb = useInput11Cb()
const Input12Props = useStore((state)=>state["home2"]["Input12"]);
const Input12IoProps = useIoStore((state)=>state["home2"]["Input12"]);
const Input12Cb = useInput12Cb()
const TextBox65Props = useStore((state)=>state["home2"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["home2"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["home2"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["home2"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Button30Props = useStore((state)=>state["home2"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["home2"]["Button30"]);
const Button30Cb = useButton30Cb()
const TextBox70Props = useStore((state)=>state["home2"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["home2"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Button32Props = useStore((state)=>state["home2"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["home2"]["Button32"]);
const Button32Cb = useButton32Cb()
const Image21Props = useStore((state)=>state["home2"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["home2"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["home2"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["home2"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image24Props = useStore((state)=>state["home2"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["home2"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["home2"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["home2"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["home2"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["home2"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["home2"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["home2"]["Image27"]);
const Image27Cb = useImage27Cb()

  return (<>
  <Div1 className="p-home2 Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<TextBox1 className="p-home2 TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Div1>
<TextBox1 className="p-home2 TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<Flex1 className="p-home2 Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Div1 className="p-home2 Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Image1 className="p-home2 Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox1 className="p-home2 TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox1 className="p-home2 TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Div1>
<Div1 className="p-home2 Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Image1 className="p-home2 Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox1 className="p-home2 TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox1 className="p-home2 TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Div1>
<Div1 className="p-home2 Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<Image1 className="p-home2 Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox1 className="p-home2 TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox1 className="p-home2 TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div1>
<Div1 className="p-home2 Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<Image1 className="p-home2 Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox1 className="p-home2 TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox1 className="p-home2 TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-home2 Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Div1 className="p-home2 Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Image1 className="p-home2 Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox1 className="p-home2 TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox1 className="p-home2 TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div1>
<Div1 className="p-home2 Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<Image1 className="p-home2 Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox1 className="p-home2 TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox1 className="p-home2 TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div1>
<Div1 className="p-home2 Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<Image1 className="p-home2 Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<TextBox1 className="p-home2 TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox1 className="p-home2 TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div1>
<Div1 className="p-home2 Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Image1 className="p-home2 Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox1 className="p-home2 TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox1 className="p-home2 TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div1>
</Flex1>
<Div1 className="p-home2 Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<Button1 className="p-home2 Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
<Button1 className="p-home2 Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Div1>
<Flex1 className="p-home2 Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Div1 className="p-home2 Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Div1 className="p-home2 Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<TextBox1 className="p-home2 TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div1>
<TextBox1 className="p-home2 TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox1 className="p-home2 TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Button1 className="p-home2 Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
<Button1 className="p-home2 Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Div1>
<Div1 className="p-home2 Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Image1 className="p-home2 Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div1>
</Flex1>
<Div1 className="p-home2 Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox1 className="p-home2 TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div1>
<Div1 className="p-home2 Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<Div1 className="p-home2 Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<TextBox1 className="p-home2 TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Testimonial className="p-home2 Testimonial1 bpt" {...Testimonial1Props} {...Testimonial1Cb} {...Testimonial1IoProps}/>
<Div1 className="p-home2 Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<Button1 className="p-home2 Button27 bpt" {...Button27Props} {...Button27Cb} {...Button27IoProps}/>
<Button1 className="p-home2 Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
</Div1>
<Flex1 className="p-home2 Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Div1 className="p-home2 Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox1 className="p-home2 TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox1 className="p-home2 TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Div1>
<Div1 className="p-home2 Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Div1 className="p-home2 Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<Flex1 className="p-home2 Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Div1 className="p-home2 Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox1 className="p-home2 TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Input className="p-home2 Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Div1>
<Div1 className="p-home2 Div56 bpt" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<TextBox1 className="p-home2 TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Input className="p-home2 Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-home2 Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Div1 className="p-home2 Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<TextBox1 className="p-home2 TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Input className="p-home2 Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Div1>
<Div1 className="p-home2 Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<TextBox1 className="p-home2 TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Input className="p-home2 Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Div1>
</Flex1>
<TextBox1 className="p-home2 TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Flex1 className="p-home2 Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Div1 className="p-home2 Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<TextBox1 className="p-home2 TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Input className="p-home2 Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
</Div1>
<Div1 className="p-home2 Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<TextBox1 className="p-home2 TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Input className="p-home2 Input12 bpt" {...Input12Props} {...Input12Cb} {...Input12IoProps}/>
</Div1>
</Flex1>
<Div1 className="p-home2 Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<TextBox1 className="p-home2 TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Div1>
<Input className="p-home2 Input13 bpt" {...Input13Props} {...Input13Cb} {...Input13IoProps}/>
<Div1 className="p-home2 Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Button1 className="p-home2 Button30 bpt" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
</Div1>
</Div1>
</Div1>
</Flex1>
</Div1>
</Div1>
<Flex1 className="p-home2 Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox1 className="p-home2 TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<Button1 className="p-home2 Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
</Flex1>
<Flex1 className="p-home2 Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex1 className="p-home2 Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image1 className="p-home2 Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<Image1 className="p-home2 Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex1>
<Flex1 className="p-home2 Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image1 className="p-home2 Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Image1 className="p-home2 Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image1 className="p-home2 Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Image1 className="p-home2 Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-home2 Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}/>
  </>);
}
