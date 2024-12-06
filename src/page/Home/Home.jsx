import React from 'react';

export function Home() {
    const items = [
        { link: '/delivery', imageSrc: '/img/In.png', title: 'นำเข้าสินค้า' },
        { link: '/shipping', imageSrc: '/img/out.png', title: 'ส่งออกสินค้า' },
        { link: '/inventory', imageSrc: '/img/location.png', title: 'สถานะสินค้า' },
        { link: '/inventory', imageSrc: '/img/Return.png', title: 'คืนสินค้า' },
        { link: '/inventory', imageSrc: '/img/ItemInStor.png', title: 'สินค้าคงคลัง' },
        { link: '/inventory', imageSrc: '/img/ItemAll.png', title: 'รายการทั้งหมด' },
    ];

    return (
        <div className='w-full h-[90%]'>
            <div className='flex justify-between p-5 flex-wrap gap-4'> {/* ใช้ gap-4 สำหรับการจัดระยะห่าง */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => window.location.href = item.link}
                        className="w-50 h-60 flex flex-col justify-center items-center rounded-2xl bg-slate-300 shadow-lg hover:shadow-xl hover:bg-slate-400 transition-all cursor-pointer" // เพิ่มเงา, hover และ cursor-pointer
                    >
                        <img src={item.imageSrc} alt={item.title} className="w-48 h-40 object-contain p-5" />
                        <p className="text-2xl flex justify-center items-center font-bold text-sky-900">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
