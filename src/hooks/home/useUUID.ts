/**
 * 
 * @link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
 * @returns uuid
 */
export const v4: () => string = () => {
    
    const e = ( ( [1e7] as any )+-1e3+-4e3+-8e3+-1e11).toString()

    return e.replace(/[018]/g, ( c: any ) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );     
}