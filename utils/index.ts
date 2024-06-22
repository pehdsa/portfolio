export const handleTo = (link: string) => {
    const elemento = document.querySelector(link);
    if (!!elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}