
import Button from '../components/button'

export default function Card({ className="", title, description, leftButton, rightButton }) {
    return (
        <div className={`p-3 m-2 shadow-lg rounded-lg bg-white ${className}`}>
            <div className="flex justify-between border-b pb-3">
                <Button className="bg-red-300">
                    {leftButton}
                </Button>
                <h1 className="text-center text-xl font-bold m-2 mb-2">{title ?? `Title`}</h1>
                <Button className="bg-green-300">
                    {rightButton}
                </Button>
            </div>
            <p className="m-2 line-clamp-15 lg:line-clamp-8">{description ?? 
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at finibus ex, non euismod tellus. Nullam porttitor, purus at consequat tristique, eros libero ultrices sapien, id pretium libero ex in nibh. Donec gravida orci vitae lectus tempus placerat. Integer commodo non ipsum sed maximus. Vivamus mattis tortor leo, ac cursus lectus varius sed. Sed ornare dui non facilisis efficitur. Etiam tortor odio, dictum nec arcu at, pellentesque porttitor magna. Mauris rhoncus blandit sodales. Phasellus tincidunt ultricies leo, nec lacinia mauris pellentesque quis. Suspendisse cursus semper purus, quis interdum nisl ultricies ac.

            Suspendisse vitae convallis tortor, sed dapibus loxrem. Vivamus vulputate pellentesque nisl non cursus. Suspendisse potenti. Integer luctus felis mauris, id efficitur erat finibus nec. Donec pellentesque nisi vitae purus laoreet sodales. Donec eu gravida est, non faucibus diam. Quisque ipsum dui, fermentum non fermentum ac, ultrices ac dolor. Morbi dignissim diam eros, a congue nisi pulvinar quis.

            Etiam vel dolor mauris. Maecenas pellentesque ipsum eget lectus lobortis, vel condimentum diam bibendum. Phasellus in suscipit arcu. Etiam enim lacus, porta a sollicitudin eu, congue et libero. Donec nec nunc vel nisl faucibus posuere eget quis eros. Praesent vestibulum, felis hendrerit fringilla lobortis, mauris felis tempor diam, ut sagittis metus risus ac massa. Curabitur hendrerit fringilla placerat. Cras consectetur, dui quis sodales sodales, ex ex tempus mauris, vel fermentum arcu mi at libero.

            Mauris sollicitudin elit vitae suscipit pharetra. Suspendisse sit amet metus vel ligula eleifend posuere vel vel mi. Aliquam posuere ultricies tellus a mollis. Proin vel lacus nec ligula vehicula eleifend sed in nisl. Phasellus lacus quam, convallis nec neque ac, posuere faucibus nunc. Curabitur a lacus venenatis, scelerisque eros sit amet, bibendum dui. Sed facilisis lorem lectus, vel suscipit mi molestie sed. Curabitur vel odio pretium, vulputate magna et, porta tellus. Cras tempor velit nec risus mollis aliquet.

            Nam sed varius erat. Nulla a tempor justo. Duis ac dui et nibh scelerisque vulputate. In semper erat a lorem dictum, eget convallis nulla dictum. Sed magna enim, posuere in ante ut, elementum dapibus nulla. Fusce viverra porttitor est, at sollicitudin neque porttitor non. In non gravida massa. Mauris sit amet mattis massa. Suspendisse lorem diam, bibendum eget mi quis, interdum aliquet eros. Proin velit arcu, accumsan sed felis vel, mattis vehicula diam. Praesent vehicula justo non diam gravida, eu faucibus augue lacinia. Donec magna dui, blandit eu eleifend id, tincidunt eu turpis. Quisque sollicitudin massa ac ante efficitur sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vitae enim vitae nisl congue elementum.`}</p>
        </div>
    );
}