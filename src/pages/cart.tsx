import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { remove } from "@/redux/slices/cart-slice"
import { Heart, Trash2 } from "lucide-react"
import { toggleAnmount } from "@/redux/slices/cart-slice"
export default function Cart() {
    const { data } = useSelector((state: any) => state?.data)
    const dispatch = useDispatch()
    console.log(data);

    const handleRemoveToCart = (data: any) => {
        dispatch(remove(data))
    }

    const toggleCard = (type: any, id: any) => {
        dispatch(toggleAnmount({ id, type }))
    }
    return (
        <div className="w-[1440px] mx-auto ">
            <h1 className="text-2xl mt-8 mb-4">Your Products</h1>
            <div className="flex gap-2 w-full">
                <div className="w-[1000px] mb-4">
                    {
                        data?.length > 0
                            ? (
                                <div className="flex flex-col gap-4">
                                    {data?.map((item: any, i: any) => (
                                        <div className="flex gap-2 border rounded-lg px-6 py-4" key={i}>
                                            <img src={item?.img} alt="" />
                                            <div className="w-full">
                                                <div className="flex items-center  justify-between">
                                                    <h3 className="text-[24px] ">{item?.title}</h3>
                                                    <p className="text-[24px]">{item.userPrice} сум</p>
                                                </div>
                                                <div className="flex  gap-2 mt-4 justify-between items-center ">
                                                    <div className="flex gap-2">
                                                        <Button variant={"outline"} onClick={() => handleRemoveToCart(item.id)} className=" text-white  "><Heart className="text-gray-500" /></Button>
                                                        <Button variant={"outline"} onClick={() => handleRemoveToCart(item.id)} className=""><Trash2 /></Button>
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <Button variant={"outline"} className="text-[20px] flex items-center justify-center" onClick={() => dispatch(toggleAnmount({ id: item.id, type: "add" }))}>+</Button>
                                                        <p className="text-[24px]">{item.count}</p>
                                                        <Button variant={"outline"} className="text-[28px] flex items-center justify-center" onClick={() => toggleCard("remove", item.id)}>-</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                            : (
                                <div className="flex justify-center items-center w-full">
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png" alt="" />
                                </div>
                            )
                    }
                </div>
                <div className="w-1/3 p-4 bg-gray-100 h-[253px] rounded-lg">
                    <span className="text-[24px] mb-2 block">В корзине</span>
                    <span className="text-[18px] mb-2">Товаров: {data?.length}</span>
                    <p className="text-red-500">Введите промокод</p>
                    <p className="text-[24px] my-2">{data?.reduce((a: any, b: any) => a + b.userPrice, 0)} сум</p>
                    <Button className="w-full bg-[#FEEE00]  hover:bg-[#fff45a] text-[#000000] text-[18px]">Оформить заказ</Button>
                </div>
            </div>
        </div>
    )
}