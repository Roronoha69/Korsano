function personalizedProgram(paramsCal) {
    if (paramsCal > 2400 && paramsCal <= 2500) {
        // Monday R1
        setMondayChevre('1 ounce / 25')
        setMoR1('610')
        setMoR1p('35')
        setTuR1('610')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('0.8 ounce / 20')
        setMealPrep1Nuts('10')
        setMealPrep1Quinoa('6 ounce / 170')
        setMoR2('730')
        setMoR2p('34')
        setTueR2('730')
        setTueR2p('34')
        setWeR2('730')
        setWeR2p('34')
        setTuR2('730')
        setTuR2p('34')

        //Monday R3
        setShakeurAvoine('1 tbsb')
        setShakeurBDC('1 tbsp / 30')
        setShakeurBanane('1')
        setShakeurChoco('1 sqare')
        setShakeurGlace('2 ounce / 60g')
        setShakeurLait('7 fl-oz / 200')

        setMoR2('500')
        setMoR2p('14')
        setTueR2p('510')
        setTueR2p('14')
        setWeR2('500')
        setWeR2p('14')
        setTuR2('510')
        setTuR2p('14')
        setFiR2('500')
        setFiR2p('14')        
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('2.5 ounce / 75')
        setMondayRiz('7 ounce / ')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')




        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        tuR1('590')
        tuR1p('36')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        tuR4('660')
        tuR4p('39')

        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        weR1('630')
        weR1p('35')

        fiR1('630')
        fiR1p('35')


        //WE R4
        setWednesdayCreme('4 tbsp')
        setWednesdayHuile('1')
        setWednesdayTofu('3.5 ounce / 100')
        setWednesdayWrap('2')
        setWeR4('640')
        setWeR4p('28')



        //Tu R4
        setThursdayChevre('1/2 ounce / 15g')
        setThursdayRiz('6-oucne / 170')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('650')
        setTuR4p('33')



    

        //FI R4
        fridayBeef('3.5 ounce / 100')
        fridayCheese('1 ounce')
        fridayWrap('2 small')
        
        setFiR1()
        setFiR1p()


        
        //Sa R1
        setSaturdayEggs('2')
        setSaturdayToast('2')
        setSaturdayYaourt('3.5 ounce / 100')

        setSaR1('620')
        setSaR1p('21')

        //Sa R2
        setSaturdayRmeat('3.5 oz / 100')
        setSaturdayPasta('8 ounce')
        setSaturdayPesto('1 tbsp')
        setSaturdayOil('1 tsp')

        setSaR2('670')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('1')
        setSaturdayMilk('100')
        setSaturdayHam('3')
        setSaturdayDark('1 square')
        setSaturdayPb('no need to add')

        setSaR3('555')
        setSaR3p('17')



        // Sa R4
        setSaturdayTofu('3.5 ounce / 100')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/5 ouce / 15g ')

        setSaR4('640')
        setSaR4p('32')


        //Su R1 
        setPankakesButter('no need')
        setPankakesDark('1 square')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('1 tbsp')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')

        // Su R2

        setSundayBurger()


    }  
}









// Breakfast 
const [breakfastOeufs, setBreakfastOeufs] = useState('3')
const [breakfastWrap, setBreakfastWraps] = useState('1')
const [mondayChevre, setMondayChevre] = useState()
const [mondayBreakfastOil, setMondayBreakfastOil] = useState()


//Meal prep
const [mealPrep1Quinoa, setMealPrep1Quinoa] = useState()
const [mealPrep1Chiken, setMealPrep1Chiken] = useState()
const [mealPrep1Feta, setMealPrep1Feta] = useState()
const [mealPrep1Huile, setMealPrep1Huile] = useState()
const [mealPrep1Avoca, setMealPrep1Avoca] = useState('1/2')
const [mealPrep1Nuts, setMealPrep1Nuts] = useState()

// colation Shakeur
const [shakeurLait, setShakeurLait] = useState()
const [shakeurBanane, setShakeurBanane] = useState('1')
const [shakeurBDC, setShakeurBDC] = useState()
const [shakeurGlace, setShakeurGlace] = useState()
const [shakeurAvoine, setShakeurAvoine] = useState()
const [shakeurChoco, setShakeurChoco] = useState()

//monday Dinner
const [mondayTofu, setMondayTofu] = useState()
const [mondayRiz, setMondayRiz] = useState()
const [mondayPoid, setMondayPoid] = useState()
const [mondayEggs, setMondayEggs] = useState('1')
const [mondayPesto, setMondayPesto] = useState()



//Tuesday breakfast
const [tuesdayBreakfastBDC, setTuesdayBreakfastBDC] = useState('')

//Collation 2 
const [redFruits, setRedFruits] = useState()

const [tuesdayWrap, setTuesdayWrap] = useState()
const [tuesdaySardine, setTuesdaySardines] = useState('')
const [tuesdayYaourt, setTuesdayYaourt] = useState('')


//Mercredi Dej
const [wednesdayChevre, setWednesdayChevre] = useState('')
const [wednesdayPesto, setWednesdayPesto] = useState('')
const [wednesdayNoix, setWednesdayNoix] = useState('')


//Mercredi dinner
const [wednesdayWrap, setWednesdayWrap] = useState('')
const [wednesdayTofu, setWednesdayTofu] = useState('')
const [wednesdayHuile, setWednesdayHuile] = useState('') 
const [wednesdayCreme, setWednesdayCreme] = useState('') 

//Thurday brekfast
// BFST IDEM LUNDI


//Thursday diner 

const [thurdayHuile, setThursdayHuile] = useState('') 
const [thurdayChevre, setThursdayChevre] = useState()
const [thurdayRiz, setThursdayRiz] = useState()
const [thurdayFish, setThursdayFish] = useState()
const [thurdayLentille, setThursdayLentille] = useState(40)
const [thurdaySauce, setThursdaySauce] = useState()  


//Friday  
// IDEM MARDI



// Friday  meal prep
const [mealPrep3Fish, setMealPrep3Fish] = useState('') 



//friday dinner
const [fridayWrap, setFridayWrap] = useState()
const [fridayBeef, setFridayBeef] = useState()
const [fridayCheese, setFridayCheese] = useState()



// Saturday petit déjeuner 
const [saturdayAvoca, setSaturdayAvoca] = useState()
const [saturdayEggs, setSaturdayEggs] = useState()
const [saturdayToast, setSaturdayToast] = useState()
const [saturdayYaourt, setSaturdayYaourt] = useState()


// lunch
const [saturdayOil, setSaturdayOil] = useState()
const [saturdayRmeat, setSaturdayRmeat] = useState()
// pasta idem 
const [saturdayPesto, setSaturdayPesto] = useState()


// collation

const [saturdaySnackEggs, setSaturdaySnackEggs] = useState()
const [saturdayMilk, setSaturdayMilk] = useState()
const [saturdayHam, setSaturdayHam] = useState()
const [saturdayDark, setSaturdayDark] = useState()
const [saturdayPb, setSaturdayPb] = useState()




//Saturday evening

const [saturdayPasta, setSaturdayPasta] = useState() 
const [saturdayTofu, setSaturdayTofu] = useState() 
const [saturdayBeans, setSaturdayBeans] = useState() 
const [saturdayCashew, setSaturdayCashew] = useState()




//Sunday

//Breakfast
const[pankakesEggs, setPankakesEggs] = useState()
const[pankakesOats, setPankakesOats] = useState()
const[pankakesFarine, setPankakesFarine] = useState()
const[pankakesMilk, setPankakesMilk] = useState()
const[pankakesDark, setPankakesDark] = useState()
const[pankakesButter, setPankakesButter] = useState()
const[pankakesMapple, setPankakesMapple] = useState()


// lunch
const [sundayRmeat, setSundayRmeat] = useState()
const [sundayBurger, setSundayBurger] = useState()
const [sundaySweetP, setSundaySweetP] = useState()
const [sundayCheese, setSundayCheese] = useState()


// Snack

// BF/2

//Dinner

const [sundayEggs, setSundayEggs] = useState()
const [sundayRiz, setSundayRiz] = useState()
const [sundayVegeteble, setSundayVegeteble] = useState()
const [sundayPeanut, setSundayPeanut] = useState()



const [moR1, setMoR1] = useState()
const [ moR2, setMoR2] = useState()
const [ moR3, setMoR3] = useState()
const [ moR4, setMoR4] = useState()

const [moR1p, setMoR1p] = useState()
const [ moR2p, setMoR2p] = useState()
const [ moR3p, setMoR3p] = useState()
const [ moR4p, setMoR4p] = useState()

const [ tueR1, setTueR1] = useState()
const [ tueR2, setTueR2] = useState()
const [ tueR3, setTueR3] = useState()
const [ tueR4, setTueR4] = useState()

const [ tueR1p, setTueR1p] = useState()
const [ tueR2p, setTueR2p] = useState()
const [ tueR3p, setTueR3p] = useState()
const [ tueR4p, setTueR4p] = useState()


const [ weR1, setWeR1] = useState()
const [ weR2, setWeR2] = useState()
const [ weR3, setWeR3] = useState()
const [ weR4, setWeR4] = useState()

const [ weR1p, setWeR1p] = useState()
const [ weR2p, setWeR2p] = useState()
const [ weR3p, setWeR3p] = useState()
const [ weR4p, setWeR4p] = useState()


const [ tuR1, setTuR1] = useState()
const [ tuR2, setTuR2] = useState()
const [ tuR3, setTuR3] = useState()
const [ tuR4, setTuR4] = useState()


const [ tuR1p, setTuR1p] = useState()
const [ tuR2p, setTuR2p] = useState()
const [ tuR3p, setTuR3p] = useState()
const [ tuR4p, setTuR4p] = useState()

const [ fiR1, setFiR1] = useState()
const [ fiR2, setFiR2] = useState()
const [ fiR3, setFiR3] = useState()
const [ fiR4, setFiR4] = useState()

const [ fiR1p, setFiR1p] = useState()
const [ fiR2p, setFiR2p] = useState()
const [ fiR3p, setFiR3p] = useState()
const [ fiR4p, setFiR4p] = useState()

const [ saR1, setSaR1] = useState()
const [ saR2, setSaR2] = useState()
const [ saR3, setSaR3] = useState()
const [ saR4, setSaR4] = useState()


const [ saR1p, setSaR1p] = useState()
const [ saR2p, setSaR2p] = useState()
const [ saR3p, setSaR3p] = useState()
const [ saR4p, setSaR4p] = useState()

const [ suR1, setSuR1] = useState()
const [ suR2, setSuR2] = useState()
const [ suR3, setSuR3] = useState()
const [ suR4, setSuR4] = useState()


const [ suR1p, setSuR1p] = useState()
const [ suR2p, setSuR2p] = useState()
const [ suR3p, setSuR3p] = useState()
const [ suR4p, setSuR4p] = useState()