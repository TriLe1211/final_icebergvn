export const products= [
    {
        id: 1,
        images: ['../img/residence.avif','../img/mall.avif', '../img/gymnasium.avif'],
        productName: 'CEBERG COMPACT',
        desc: 'Máy treo tường – Phù hợp cho các tòa nhà và công trình dân dụng',
        feature: 
                ['Hoạt động 24/7 mọi điều kiện thời tiết.<br>', 
                'Nước được xử lý và cung cấp trực tiếp (liên tục, không dùng bồn chứa).<br>',
                'Màn hình LED 4 dòng hiển thị: giá theo lít, số điện thoại hỗ trợ kỹ thuật và ngày thay lõi lọc gần nhất.<br>',
                'Chấp nhận thanh toán qua thẻ không tiếp xúc, mã QR và tiền mặt.<br>',
                'Giao diện có đèn nền – dễ sử dụng vào ban đêm.<br>',
                'Hệ thống camera thông minh cảnh báo được tích hợp sẵn.<br>'
            ],
        specifications: {
            weight: '150 kg', 
            size: '1550 × 800 × 515 mm',
            door: 'Nhựa polycarbonate 5 mm có tay cầm',
            capacity:'300 lít',          
            customerTankCapacity:'lên đến 19 lít',
            operatingTemperature: '–40°C đến +40°C',
            voltage:'220V / 50Hz',
            powerConsumption:'100W (chế độ chờ 10W)',
            waterFiltrationRate: '1–2 lít/phút',
            waterSupplyRate: '12 lít/phút'
        }
    },
    {
        id: 2,
        images: ['../img/table.avif','../img/banner.avif'],
        productName: 'CEBERG STANDARD',
        desc: 'Máy dạng đứng – Tích hợp bồn nước 300 lít',
        feature: 
        ['Vỏ ngoài bằng thép không gỉ AISI 430.<br>',
        'Hệ thống lọc và cấp nước bằng thép không gỉ AISI 304 (kháng ăn mòn hoàn toàn).<br>',
        'Bao gồm tất cả chức năng của mẫu Compact.<br>',
        'Hoạt động độc lập nhờ bồn chứa nước tích hợp bên trong.<br>'
        ],
        specifications: {
            weight: '170 kg', 
            size: '2047 × 800 × 880 mm',
            door: 'Nhựa polycarbonate 5 mm có tay cầm',
            capacity:'300 lít',          
            customerTankCapacity:'lên đến 19 lít',
            operatingTemperature: '–40°C đến +40°C',
            voltage:'220V / 50Hz',
            powerConsumption:'100W (standby 10W)',
            waterFiltrationRate: '1–2 lít/phút',
            waterSupplyRate: '12 lít/phút'
        }
    },
]

export const filteringProcess = [
   'Màng lọc polypropylene 5 micrômét',
   'Than hoạt tính từ gáo dừa',
   'Màng lọc polypropylene 1 micrômét',
   'Màng lọc thẩm thấu ngược (RO)',
   'Bổ sung khoáng chất',
   'Tinh lọc bằng than hoạt tính',
   'Khử trùng bằng tia cực tím (UV)',
   'Khử trùng bình chứa bằng công nghệ Ozone'
]