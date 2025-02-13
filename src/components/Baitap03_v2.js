export function Shape({ size, backgroundColor, borderRadius }) {
    return (
        <div
            style={{
                width: size.width,
                height: size.height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
        />
    );
}

export function Rectangle() {
    return (
        <div>
            <Shape
                size={{ width: '100%', height: '250px' }}
                backgroundColor="blue"
                borderRadius={0}
            />
        </div>
    );
}

export function Circle() {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Shape
                size={{ width: '150px', height: '150px' }}
                backgroundColor="red"
                borderRadius="50%"
            /></div>
    );
}

export function Text() {
    return (
        <div>
            <p
                style={{ textAlign: 'justify', fontSize: '16px' }}>
                The correct HTML element for playing video files is a. Introduced in HTML5, the element allows developers to embed video content directly into web pages without relying on external plugins like Adobe Flash.The correct HTML element for playing video files is a. Introduced in HTML5, the element allows developers to embed video content directly into web pages without relying on external plugins like Adobe Flash.The correct HTML element for playing video files is a. Introduced in HTML5, the element allows developers to embed video content directly into web pages without relying on external plugins like Adobe Flash.
            </p>
        </div>
    );
}

export function Square() {
    return (
        <div>
            <Shape
                size={{ width: '300px', height: '300px' }}
                backgroundColor="yellow"
                borderRadius={0}
            /></div>
    );
}

export function CircleAndText() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                margin: '10px 0'
            }}
        >
            <div
                style={{
                    width: '50%',
                    margin: '10px'
                }}>
                <Circle />
                <Text />
            </div>

            <div
                style={{
                    width: '50%',
                    margin: '10px'
                }}>
                <Circle />
                <Text />
            </div>
        </div>
    );
}

function renderSquaresWithLoop(count) {
    const squares = [];
    for (let i = 0; i < count; i++) {
        squares.push(<Square key={i} />);
    }
    return squares;
}

export function Baitap03_v2() {
    return (
        <div
            style={{
                margin: '10px'
            }}>
            <Rectangle />
            <CircleAndText />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                {renderSquaresWithLoop(3)}
            </div>
        </div>
    );
}
