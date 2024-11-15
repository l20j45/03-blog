export class Formatter {
    static formDate(value: Date): string {
        const date = new Date(value);
        return Intl.DateTimeFormat('es-Mx', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(date)

    }
}