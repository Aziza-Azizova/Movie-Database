export function getYear(year:string){
    return new Date(year).getFullYear()
}


export function getRunTime(runTime: number, type: string){
    let h = Math.floor(runTime / 60);
    let m = runTime - (h * 60);

    return type === 'movie' ? `${h} час : ${m} минут` : `${m} минут`
    
}