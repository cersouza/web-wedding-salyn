import Image from 'next/image';

export default function PageDivider() {
    const styles = {
        margin: '1rem 0',
        textAlign: 'center'
    };

    return(
        <div style={styles}>
            <Image
                src="/assets/img/divider.png"
                alt="Divider"
                width={200}
                height={22}
            />
        </div>
    );
}