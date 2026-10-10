import Hero from "./Hero";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import Universe from "./Universe";
import Kiteimage from "../../assets/kite.png";
import coinimage from "../../assets/coin.png";
import varsityimage from "../../assets/varsity.png";
import console from "../../assets/console.png";
import kite from "../../assets/kiteconnect.png";

export default function ProductsPage() {
  return (
    <>
      <Hero/>
      <LeftImageSection imageUrl={Kiteimage} productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data. advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Andriod and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />
      <RightImageSection productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="#" imageUrl={console}/>
      <LeftImageSection imageUrl={coinimage} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />
      <RightImageSection productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="#" imageUrl={kite}/>
      <LeftImageSection imageUrl={varsityimage} productName="Varsity" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />
      <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe/>
    </>
  );
};