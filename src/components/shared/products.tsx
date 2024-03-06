import { useGetProducts } from "@/service/query/useGetProducts"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/slices/cart-slice"
const Products = () => {
    const dispatch = useDispatch()
    const { data: telephones } = useGetProducts("tel")
    const handleAddToCart = (data: any) => {
        dispatch(addToCart(data))
    }
    return (
        <div className="w-[1440px] mx-auto my-6">
            <h1 className="text-2xl my-4">Смартфоны и планшеты</h1>
            <Carousel className="w-full ">
                <CarouselContent>
                    {telephones?.map((item: any, index: number) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-3 flex-col">
                                        <img src={item?.img} alt="" />
                                        <h3 className="text-[16px] mt-2">{item?.title}</h3>
                                        <div className="w-full flex justify-between items-center mt-2">
                                            <p className="text-[18px]">{item?.price}</p>
                                            <Button onClick={() => handleAddToCart(item)} className="bg-[#FEEE00]  hover:bg-[#fff45a] text-[#000000]"><ShoppingCart /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="w-10 h-10 left-[-20px]" />
                <CarouselNext className="w-10 h-10 right-[-20px]" />
            </Carousel>
        </div>
    )
}

export default Products