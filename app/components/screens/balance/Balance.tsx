import Layout from "@/layout/Layout";
import BalanceInput from "@/screens/balance/top/BalanceInput";
import BalanceStats from "@/screens/balance/top/BalanceStats";
import Progressbar from "@/screens/balance/top/Progressbar";
import Image from "next/image";
import { FC, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import noPhoto from "../../../../public/images/nophoto.png";

export type progressBar = {
  bgcolor: string,
  completed: number
}

export type balanceInputs = {
  title: string,
  placeholder: string,
  type: string
}

const Balance: FC = () => {
  const [balance, setBalance] = useState("12,345,789");
  
  const stats = [
    {
      id: 1,
      title: "Working Hard",
      currentNum: 500,
      maxNum: 1000,
      color: "#6160DC"
    },
    {
      id: 2,
      title: "Working Hard",
      currentNum: 750,
      maxNum: 1000,
      color: "#54C5EB"
    },
    {
      id: 3,
      title: "Working Hard",
      currentNum: 625,
      maxNum: 1000,
      color: "#FFB74A"
    },
    {
      id: 4,
      title: "Working Hard",
      currentNum: 250,
      maxNum: 1000,
      color: "#FF4A55"
    }
  ];
  
  const card = {
    number: "•••• •••• •••• 1234",
    name: "Rara Avis",
    expireDate: "03/21"
  };
  
  const recipients = [
    {
      id: 1,
      name: "Jordan",
      img: ""
    },
    {
      id: 2,
      name: "Tony",
      img: ""
    },
    {
      id: 3,
      name: "Karen",
      img: ""
    },
    {
      id: 4,
      name: "Jordan",
      img: ""
    },
    {
      id: 5,
      name: "Sariel",
      img: ""
    },
    {
      id: 6,
      name: "John",
      img: ""
    },
    {
      id: 7,
      name: "Sara",
      img: ""
    },
    {
      id: 8,
      name: "Keyfol",
      img: ""
    },
    {
      id: 9,
      name: "Karen",
      img: ""
    },
    {
      id: 10,
      name: "Mishel",
      img: ""
    }
  ];
  
  const progressBar: progressBar = {
    bgcolor: "#6160DC",
    completed: 53
  };
  
  const balanceInputs: balanceInputs[] = [
    {
      title: "Recipient",
      placeholder: "Insert recipient",
      type: "text"
    },
    {
      title: "Amount",
      placeholder: "0.00",
      type: "number"
    }
  ];
  
  return (
    <Layout title="Balance">
      <div className="">
        <h1 className={"font-bold text-3xl"}>Balance</h1>
        
        <div className={"flex justify-between mt-5"}>
          <div className={"balance-card"}>
            <h3 className={"font-normal text-1xl text-[#8E8EA1]"}>My Balance</h3>
            <p className={"text-3xl font-bold mt-1"}>{`$ ${balance}`}</p>
            
            <Progressbar bgcolor={progressBar.bgcolor} completed={progressBar.completed} />
            
            <div className={"flex items-center gap-[46px] my-11"}>
              <div>
                <h4 className={"card-details__title"}>Card Holder</h4>
                <p className={"card-details__value"}>{card.name}</p>
              </div>
              
              <div>
                <h4 className={"card-details__title"}>Valid Thru</h4>
                <p className={"card-details__value"}>{card.expireDate}</p>
              </div>
              
              <p className={"text-1.5xl font-bold"}>{card.number}</p>
            </div>
            
            <div className={"flex flex-wrap items-center justify-between grid grid-cols-2 gap-y-5 gap-x-7"}>
              {stats.map(item => (
                <BalanceStats title={item.title} currentNum={item.currentNum} maxNum={item.maxNum} color={item.color}
                              key={item.id} />
              ))}
            </div>
          
          </div>
          
          <div className="balance-card">
            <div className={"flex items-center justify-between mb-7"}>
              <h2 className={"text-xl font-bold"}>Transfer & Send Invoice</h2>
              
              <div className={"rounded-full bg-[#F5F5F5] h-[40px] flex items-center overflow-hidden"}>
                <button
                  className={"flex items-center justify-center text-xs px-[18px] h-full hover:bg-[#6160DC] hover:text-[#fff] duration-150"}>Invoice
                </button>
                <button
                  className={"flex items-center justify-center text-xs px-[18px] h-full hover:bg-[#6160DC] hover:text-[#fff] duration-150"}>Transfer
                </button>
              </div>
            </div>
            
            <div className={"mb-7"}>
              <h3 className={"balance-card__subtitle"}>Recent Recipient</h3>
              
              <div className={"flex items-center gap-3 max-w-fit"}>
                <div className={"flex items-center overflow-x-hidden max-w-sm gap-5 flex-grow"}>
                  {recipients.map(recipient => (
                    <div key={recipient.id}>
                      <div className={"w-[70px] h-[70px] relative"}>
                        <Image className={"rounded-full"} fill objectFit={"cover"}
                               src={recipient.img ? recipient.img : noPhoto}
                               alt={recipient.name} />
                      </div>
                      <p>{recipient.name}</p>
                    </div>
                  ))}
                </div>
                
                <button className={"ml-5 w-[60px] h-[60px] rounded-full bg-[#F5F5F5] flex items-center justify-center"}>
                  <BsArrowRightShort className={"text-[#6160DC] w-[26px] h-[26px]"} />
                </button>
              </div>
            </div>
            
            {balanceInputs.map(balanceInput => (
              <BalanceInput key={balanceInput.title} title={balanceInput.title} placeholder={balanceInput.placeholder}
                            type={balanceInput.type} />
            ))}
            
            <div className={"flex items-center justify-between mt-2"}>
              <div>
                <input id={"card-checkbox"} type="checkbox" />
                <label htmlFor="card-checkbox">I accept privacy policy</label>
              </div>
              
              <button
                className={"rounded-full bg-[#6160DC] py-[19px] text-white font-semibold w-1/2 h-[60px] flex items-center justify-center"}>Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Balance;
