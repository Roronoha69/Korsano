//const { useState } = require("react")




// Breakfast
const [eggs,setEgges] =useState('3')
const [toast, setToast] = useState('')
const [goat, setGoat] = useState('')
const [butter, setButter] =useState('')





//Lunch
const [olive, setOlive] = useState('')
const [ tortilla, setTortilla ] = useState('')
const [ beef, setBeef ] = useState('')
const [ cheddar, setCheddar ] = useState('')
const [ pesto, setPesto ] = useState('')
const [ redB, setRedB ] = useState('')

// Snack
const [ milk, setMilk ] = useState()
const [ pb, setPb ] = useState()
const [ darkC, setDarkC ] = useState()
const [ iceCream, seticeCream ] = useState()
const [ banana, setBanana ] = useState()
const [ redFruits, setRedFruits ] = useState()
const [oats, setOats] = useState('')

//Dinner
const [ pasta, setPasta ] = useState()
const [ soy, setSoy ] = useState()
const [ peanut, setPeanut ] = useState()
const [ vegetalSauce, setVegetalSauce ] = useState()
const [beans, setBeans] = useState()


























function personalizedProgram(paramsCal) {

        if (paramsCal > 2400 && paramsCal <= 2500) {
        
        // Monday R1
        setMondayChevre('.9 ounce / 25')
        setMoR1('610')
        setMoR1p('35')
        setTuR1('620')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('0.8 ounce / 20')
        setMealPrep1Nuts('10')
        setMealPrep1Quinoa('5 ounce / 140')
        setMoR2('730')
        setMoR2p('36')
        setTueR2('730')
        setTueR2p('36')
        setWeR2('730')
        setWeR2p('36')
        setTuR2('730')
        setTuR2p('36')

        //Monday R3
        setShakeurAvoine('1 ounce / 30') 
        setShakeurBDC('1 tbsp / 30')
        setShakeurBanane('1')
        setShakeurChoco('1 sqare')
        setShakeurGlace('2 ounce / 50')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('550')
        setMoR3p('12')
        setTueR3p('560')
        setTueR3p('12')
        setWeR3('550')
        setWeR3p('12')
        setTuR3('560')
        setTuR3p('12')
        setFiR2('550')
        setFiR3p('12')        
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('2.5 ounce / 75')
        setMondayRiz('6 ounce / 170')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')

        // 2490

        




        //Tuesday R1
        setTuesdayBreakfastBDC('0.8 ounce / 25')

        setTuR1('590')
        setTuR1p('36')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        setTuR4('660')
        setTuR4p('39')

        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


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


        // setFriday R2
        setMealPrep3Fish('3.5 ounce / 100')
        setMealPrep3Cheese('.8 ounce / 20')
        setFiR2('770')
        setFiR2p('24')
    

        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('.7 ounce / 20 ')
        setFridayWrap('1')
        
        setFiR4('510')
        setFiR4p('34')


        
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
        setPankakesDark('no need')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('1 tbsp')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('650')
        setSuR1p('23')
        setSuR3('650')
        setSuR3p('23')
        
        // Su R2
        setSundayCheese('1/2 ounce / 15')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100g')
        setSuR2('650')
        setSuR2p('34')

        // Su R4
        setSundayRiz('5 ouce / 145g')
        setSundayEggs('2')
        setSundayPeanut('1/2 ounce / 15')
        setSundayVegeteble('max')
        setSuR4('540')
        setSuR4p('27')
        
    }  













    if (paramsCal > 2500 && paramsCal <= 2600) {
        // Monday R1
        setMondayChevre('.9 ounce / 25') // 
        setMoR1('610')
        setMoR1p('35')
        setTuR1('620')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('10')
        setMealPrep1Quinoa('5 ounce / 140')
        setMoR2('730')
        setMoR2p('34')
        setTueR2('730')
        setTueR2p('34')
        setWeR2('730')
        setWeR2p('34')
        setTuR2('730')
        setTuR2p('34')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g') //+ 50 cal
        setShakeurBDC('1 tbsp / 30')
        setShakeurBanane('1')
        setShakeurChoco('1 sqare')
        setShakeurGlace('2 ounce / 50g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('550')
        setMoR3p('14')
        setTueR3('560')
        setTueR3p('14')
        setWeR3('550')
        setWeRp('14')
        setTuR3('560')
        setTuR3p('14')
        setFiR3('550')
        setFiR3p('14')        
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('2.5 ounce / 75')
        setMondayRiz('6 ounce / 170')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')

// 2540


        //Tuesday R1
        setTuesdayBreakfastBDC('0.8 ounce / 25')

        setTuR1('590')
        setTuR1p('36')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        setTuR4('660')
        setTuR4p('39')

        // 2540
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
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

//2570

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2('790')
        setFiR2p('24')
    




        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce')
        setFridayWrap('2 small')
        
        setFiR4('620')
        setFiR4p('40')

        // 2570 

        
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
        setSaturdayOil('1 tbsp')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('1')
        setSaturdayMilk('100')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('no need to add')

        setSaR3('605')
        setSaR3p('17')



        // Sa R4
        setSaturdayTofu('3.5 ounce / 100')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('640')
        setSaR4p('32')

// 2585


        //Su R1 
        setPankakesButter('no need')
        setPankakesDark('1 square / 10')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('1 tbsp')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('700')
        setSuR1p('23')
        setSuR3('700')
        setSuR3p('23')
        
        // Su R2
        setSundayCheese('1/2 ounce / 15')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100g')
        setSuR2('650')
        setSuR2p('34')
        
        // Su R4
        setSundayRiz('5 ouce / 145g')
        setSundayEggs('2')
        setSundayPeanut('1/2 ounce / 15')
        setSundayVegeteble('max')
        setSuR4('540')
        setSuR4p('27')
        // 2590


}  












        if (paramsCal > 2600 && paramsCal <= 2700) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('630')
        setMoR1p('35')
        setTuR1('630')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('10')
        setMealPrep1Quinoa('6 ounce / 170')
        setMoR2('770')
        setMoR2p('34')
        setTueR2('770')
        setTueR2p('34')
        setWeR2('770')
        setWeR2p('34')
        setTuR2('770')
        setTuR2p('34')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 tbsp / 30')
        setShakeurBanane('1')
        setShakeurChoco('1 sqare')
        setShakeurGlace('2 ounce / 50g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('590')
        setMoR3p('14')
        setTueR3('600')
        setTueR3p('14')
        setWeR3('590')
        setWeR3p('14')
        setTuR3('600')
        setTuR3p('14')
        setFiR3('590')
        setFiR3p('14')        
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('6 ounce / 170g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')

// 2675


        //Tuesday R1
        setTuesdayBreakfastBDC('0.8 ounce / 25')

        setTuR1('590')
        setTuR1p('36')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        setTuR4('660')
        setTuR4p('39')

        // 2650
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('3.5 ounce / 100')
        setWednesdayWrap('2')
        setWeR4('640')
        setWeR4p('28')

// 2630

        //Tu R4
        setThursdayChevre('1/2 ounce / 15g')
        setThursdayRiz('6-oucne / 170')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('650')
        setTuR4p('33')

//2630

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('24')
        setFiR2('790')

        //2630




        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce')
        setFridayWrap('2 small')
        
        setFiR4('620')
        setFiR4p('40')

        // 2630

        
        //Sa R1
        setSaturdayEggs('2')
        setSaturdayToast('2')
        setSaturdayYaourt('3.5 ounce / 100')

        setSaR1('620')
        setSaR1p('21')

        //Sa R2
        setSaturdayRmeat('3.5 ounce / 100')
        setSaturdayPasta('8 ounce')
        setSaturdayPesto('1 tbsp')
        setSaturdayOil('10ml / 1')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('1')
        setSaturdayMilk('150')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1/2 tbsp')

        setSaR3('680')
        setSaR3p('17')



        // Sa R4
        setSaturdayTofu('3.5 ounce / 100')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('640')
        setSaR4p('32')

// 2660


        //Su R1 
        setPankakesButter('no need')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('1 tbsp')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('750')
        setSuR1p('23')
        setSuR3('700')
        setSuR3p('23')
        

        // Su R2
        setSundayCheese('1/2 ounce / 15')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100g')
        setSuR2('650')
        setSuR2p('34')
        

        // Su R4
        setSundayRiz('5 ouce / 145g')
        setSundayEggs('2')
        setSundayPeanut('1/2 ounce / 15')
        setSundayVegeteble('max')
        setSuR4('540')
        setSuR4p('27')
        // 2640
}










if (paramsCal > 2700 && paramsCal <= 2800) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('630')
        setMoR1p('35')
        setTuR1('630')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('10')
        setMealPrep1Quinoa('6 ounce / 170')
        setMoR2('770')
        setMoR2p('34')
        setTueR2('770')
        setTueR2p('34')
        setWeR2('770')
        setWeR2p('34')
        setTuR2('770')
        setTuR2p('34')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 big tbsp / 30')
        setShakeurBanane('2')
        setShakeurChoco('2 sqare')
        setShakeurGlace('2 ounce / 50g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('710')
        setMoR3p('16')
        setTueR3('710')
        setTueR3p('16')
        setWeR3('710')
        setWeR3p('16')
        setTuR3('710')
        setTuR3p('16')
        setFiR3('710')
        setFiR3p('16')        
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('6 ounce / 170g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')

// 2760


        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        setTuR1('630')
        setTuR1p('37')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        setTuR4('660')
        setTuR4p('39')

        // 2770 
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('3.5 ounce / 100')
        setWednesdayWrap('2')
        setWeR4('640')
        setWeR4p('28')

// 2750

        //Tu R4
        setThursdayChevre('1/2 ounce / 15g')
        setThursdayRiz('6-oucne / 170')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('650')
        setTuR4p('33')

//2750

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('24')
        setFiR2('790')






        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce')
        setFridayWrap('2 small')
        
        setFiR4('620')
        setFiR4p('40')

        // 2750

        
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
        setSaturdayOil('1 tbsp')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('1')
        setSaturdayMilk('150')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1 tbsp / 30')

        setSaR3('750')
        setSaR3p('21')



        // Sa R4
        setSaturdayTofu('3.5 ounce / 100')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('640')
        setSaR4p('32')

// 2740


         //Su R1 
        setPankakesButter('.3 ounce / 10')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('2 tbsp / 20')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('750')
        setSuR1p('25')
        setSuR3('750')
        setSuR3p('24')
        

        // Su R2
        setSundayCheese('1/2 ounce / 15')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100g')
        setSuR2('650')
        setSuR2p('34')
        

        // Su R4
        setSundayRiz('6 ounce / 170')
        setSundayEggs('2')
        setSundayPeanut('.8 ounce / 20')
        setSundayVegeteble('3.5 ounce / 100')
        setSuR4('590')
        setSuR4p('29')


        // 2740
}


if (paramsCal > 2800 && paramsCal <= 2900) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('630')
        setMoR1p('35')
        setTuR1('630')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('1 ounce / 10')
        setMealPrep1Quinoa('6 ounce / 170')
        
        setMoR2('890')
        setMoR2p('37')
        setTueR2('890')
        setTueR2p('37')
        setWeR2('890')
        setWeR2p('37')
        setTuR2('890')
        setTuR2p('37')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 big tbsp / 30')
        setShakeurBanane('2')
        setShakeurChoco('2 sqare')
        setShakeurGlace('2 ounce / 50g')
        setShakeurLait('7 fl-oz / 200')

    
        
        setMoR3('710')
        setMoR3p('16')
        setTueR3('710')
        setTueR3p('16')
        setWeR3('710')
        setWeR3p('16')
        setTuR3('710')
        setTuR3p('16')
        setFiR3('710')
        setFiR3p('16') 
        
        
        //Monday R4
        setMondayPesto('1 tbsp / 30')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('6 ounce / 170g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('650')
        setMoR4p('39')

// 2880


        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        setTuR1('630')
        setTuR1p('37')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')

        setTuR4('660')
        setTuR4p('39')

        // 2890 
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('3.5 ounce / 100')
        setWednesdayWrap('2')
        setWeR4('640')
        setWeR4p('28')

// 2870

        //Tu R4
        setThursdayChevre('1/2 ounce / 15g')
        setThursdayRiz('6-oucne / 170')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('650')
        setTuR4p('33')

//2870

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('29')
        setFiR2('910')






        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce')
        setFridayWrap('2 small')
        
        setFiR4('620')
        setFiR4p('40')

        // 2870

        
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
        setSaturdayOil('1 tbsp')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('2')
        setSaturdayMilk('200')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1 tbsp / 30')

        setSaR3('870')
        setSaR3p('34')



        // Sa R4
        setSaturdayTofu('3.5 ounce / 100')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('640')
        setSaR4p('32')

// 2860


         //Su R1 
        setPankakesButter('.3 ounce / 10')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('2 tbsp / 20')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('750')
        setSuR1p('25')
        setSuR3('750')
        setSuR3p('24')
        

        // Su R2
        setSundayCheese('1 ounce / 30')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100')
        setSuR2('700')
        setSuR2p('38')
        

        // Su R4
        setSundayRiz('6 ounce / 170')
        setSundayEggs('2')
        setSundayPeanut('1 ounce / 30')
        setSundayVegeteble('3.5 ounce / 100')
        setSuR4('650')
        setSuR4p('31')


        // 2850
}



if (paramsCal > 2900 && paramsCal <= 3000) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('630')
        setMoR1p('35')
        setTuR1('630')
        setTuR1p('35')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('1 ounce / 10')
        setMealPrep1Quinoa('6 ounce / 170')
        
        setMoR2('890')
        setMoR2p('37')
        setTueR2('890')
        setTueR2p('37')
        setWeR2('890')
        setWeR2p('37')
        setTuR2('890')
        setTuR2p('37')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 big tbsp / 30')
        setShakeurBanane('2')
        setShakeurChoco('2 sqare')
        setShakeurGlace('2 ounce / 50g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('710')
        setMoR3p('16')
        setTueR3('710')
        setTueR3p('16')
        setWeR3('710')
        setWeR3p('16')
        setTuR3('710')
        setTuR3p('16')
        setFiR3('710')
        setFiR3p('16')        
        
        
        //Monday R4
        setMondayPesto('1.3 ounce / 40')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('7 ounce / 200g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('720')
        setMoR4p('39')

// 2950


        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        setTuR1('630')
        setTuR1p('37')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')
        setMayo('15g of mayonnaise')

        setTuR4('750')
        setTuR4p('40')

        // 2980
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('630')
        setWeR1p('35')

        setFiR1('630')
        setFiR1p('35')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('5.5 ounce / 150')
        setWednesdayWrap('2')
        setWeR4('740')
        setWeR4p('34')
        

// 2960

        //Tu R4
        setThursdayChevre('1 ounce / 30')
        setThursdayRiz('7 oucne / 200')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('740')
        setTuR4p('38')

//2960

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('29')
        setFiR2('910')






        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce / 30')
        setFidayWrap('2')
        
        setFiR4('710')
        setFiR4p('43')

        // 2960

        
        //Sa R1
        setSaturdayEggs('2')
        setSaturdayToast('2')
        setSaturdayYaourt('3.5 ounce / 100')

        setSaR1('620')
        setSaR1p('21')

        //Sa R2
        setSaturdayRmeat('3.5 oz / 100')
        setSaturdayPasta('7 ounce / 200')
        setSaturdayPesto('1 tbsp')
        setSaturdayOil('1 tbsp')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('2')
        setSaturdayMilk('200')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1 tbsp / 30')

        setSaR3('870')
        setSaR3p('34')



        // Sa R4
        setSaturdayTofu('5.5 ounce / 150')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('730')
        setSaR4p('35')

// 2950


        //Su R1 
        setPankakesButter('.3 ounce / 10')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4 ounce / 120')
        setPankakesEggs('2')
        setPankakesMapple('2 tbsp / 20')
        setPankakesMilk('10 fl oz / 300')
        setPankakesOats('5 ounce / 150')
        
        setSuR1('750')
        setSuR1p('25')
        setSuR3('750')
        setSuR3p('24')
        

        // Su R2
        setSundayCheese('1 ounce / 30')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100')
        setSuR2('700')
        setSuR2p('38')
        

        // Su R4
        setSundayRiz('7 ounce / 200')
        setSundayEggs('2')
        setSundayPeanut('1 ounce / 30')
        setSundayVegeteble('3.5 ounce / 100')
        setSundayOil('1 tbsp of oil')
        setSuR4('750')
        setSuR4p('33')


        // 2950
}



if (paramsCal > 3000 && paramsCal <= 3100) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('710')
        setMoR1p('37')
        setTuR1('710')
        setTuR1p('37')
        setBreakfastWraps('2 medium sized')
        
        // Monday R2
        setMealPrep1Feta('.8 ounce / 20') 
        setMealPrep1Nuts('1 ounce / 10')
        setMealPrep1Quinoa('6 ounce / 170')
        
        setMoR2('890')
        setMoR2p('37')
        setTueR2('890')
        setTueR2p('37')
        setWeR2('890')
        setWeR2p('37')
        setTuR2('890')
        setTuR2p('37')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 big tbsp / 30')
        setShakeurBanane('2')
        setShakeurChoco('2 sqare')
        setShakeurGlace('2.5 ounce / 75g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('740')
        setMoR3p('16')
        setTueR3('740')
        setTueR3p('16')
        setWeR3('740')
        setWeR3p('16')
        setTuR3('740')
        setTuR3p('16')
        setFiR3('740')
        setFiR3p('16')        
        
        
        //Monday R4
        setMondayPesto('1.3 ounce / 40')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('7 ounce / 200g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('720')
        setMoR4p('39')

// 3050


        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        setTuR1('710')
        setTuR1p('39')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')
        setMayo('15g of mayonnaise')

        setTuR4('750')
        setTuR4p('40')

        // 3090
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('710')
        setWeR1p('37')

        setFiR1('710')
        setFiR1p('37')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('5.5 ounce / 150')
        setWednesdayWrap('2')
        setWeR4('740')
        setWeR4p('34')
        

// 3080

        //Tu R4
        setThursdayChevre('1 ounce / 30')
        setThursdayRiz('7 oucne / 200')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('740')
        setTuR4p('38')

//3080

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('29')
        setFiR2('910')






        //FI R4
        setFridayBeef('3.5 ounce / 100')
        setFridayCheese('1 ounce / 30')
        setFridayWrap('2')
        
        setFiR4('710')
        setFiR4p('43')

        // 3070

        
        //Sa R1
        setSaturdayEggs('2')
        setSaturdayToast('3')
        setSaturdayYaourt('3.5 ounce / 100')

        setSaR1('690')
        setSaR1p('24')

        //Sa R2
        setSaturdayRmeat('3.5 oz / 100')
        setSaturdayPasta('7 ounce / 200')
        setSaturdayPesto('1 tbsp')
        setSaturdayOil('1 tbsp')

        setSaR2('720')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('2')
        setSaturdayMilk('200')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1 tbsp / 30')

        setSaR3('870')
        setSaR3p('34')



        // Sa R4
        setSaturdayTofu('5.5 ounce / 150')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('730')
        setSaR4p('35')

// 3040


        //Su R1 
        setPankakesButter('.3 ounce / 10')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4.5 ounce / 130')
        setPankakesEggs('2')
        setPankakesMapple('2 tbsp / 20')
        setPankakesMilk('11.5 fl oz / 350')
        setPankakesOats('6 ounce / 170')
        
        
        setSuR1('80')
        setSuR1p('27')
        setSuR3('820')
        setSuR3p('28')
        

        // Su R2
        setSundayCheese('1 ounce / 30')
        setSundayRmeat('3.5 ounce / 100')
        setSundaySweetP('3.5 ounce / 100')
        setSuR2('700')
        setSuR2p('38')
        

        // Su R4
        setSundayRiz('7 ounce / 200')
        setSundayEggs('2')
        setSundayPeanut('1 ounce / 30')
        setSundayVegeteble('3.5 ounce / 100')
        setSundayOil('1 tbsp of oil')
        setSuR4('750')
        setSuR4p('33')


        // 3050
}








if (paramsCal > 3100 && paramsCal <= 3200) {
        // Monday R1
        setMondayChevre('1 ounce / 30') 
        setMoR1('710')
        setMoR1p('37')
        setTuR1('710')
        setTuR1p('37')
        setBreakfastWraps('2 medium sized')
        setBreakfastOeufs('4')
        
        // Monday R2
        setMealPrep1Feta('1 ounce / 30') 
        setMealPrep1Nuts('1 ounce / 10')
        setMealPrep1Quinoa('6 ounce / 170')
        setMealPrep1Chiken('4.5 ounce / 125')
        
        setMoR2('960')
        setMoR2p('43')
        setTueR2('960')
        setTueR2p('43')
        setWeR2('960')
        setWeR2p('43')
        setTuR2('960')
        setTuR2p('43')

        //Monday R3
        setShakeurAvoine('1 ounce / 30g')
        setShakeurBDC('1 big tbsp / 30')
        setShakeurBanane('2')
        setShakeurChoco('2 sqare')
        setShakeurGlace('2.5 ounce / 75g')
        setShakeurLait('7 fl-oz / 200')

        setMoR3('740')
        setMoR3p('16')
        setTueR3('740')
        setTueR3p('16')
        setWeR3('740')
        setWeR3p('16')
        setTuR3('740')
        setTuR3p('16')
        setFiR3('740')
        setFiR3p('16')        
        
        
        //Monday R4
        setMondayPesto('1.3 ounce / 40')
        setMondayPoid('3 ounce / 90')
        setMondayRiz('7 ounce / 200g')
        setMondayTofu('3.5 ounce / 100')

        setMoR4('720')
        setMoR4p('39')

// 3050


        //Tuesday R1
        setTuesdayBreakfastBDC('1 ounce / 30')

        setTuR1('710')
        setTuR1p('39')
        // Tuesday R3
        setRedFruits('1-ounce / 30')
        
        // tuesday R4
        setTuesdaySardines('3.5 ounce / 100')
        setTuesdayWrap('2')
        setTuesdayYaourt('3.5 ounce / 100')
        setMayo('15g of mayonnaise')

        setTuR4('750')
        setTuR4p('40')

        // 3090
        

        //We R1
        setWednesdayChevre('0.8 ounce / 20')
        setWednesdayNoix('0.5 once / 10g ')
        setWednesdayPesto('1 tbsp / 28')

        setWeR1('710')
        setWeR1p('37')

        setFiR1('710')
        setFiR1p('37')


        //WE R4
        setWednesdayCreme('2 ounce / 60') // 
        setWednesdayHuile('1')
        setWednesdayTofu('5.5 ounce / 150')
        setWednesdayWrap('2')
        setWeR4('740')
        setWeR4p('34')
        

// 3080

        //Tu R4
        setThursdayChevre('1 ounce / 30')
        setThursdayRiz('7 oucne / 200')
        setThursdayLentille('2 ounce / 60')
        setThursdayHuile('1')
        setThursdaySauce('4 tbsp')
        setThursdayFish('3.5 ounce / 100')

        setTuR4('740')
        setTuR4p('38')

//3080

    // Fi R2

        setMealPrep3Fish('3.5 ounce / 100')
        setMealprep3Cheese('.8 ounce / 20')
        setFiR2p('32')
        setFiR2('960')






        //FI R4
        setFridayBeef('4.5 ounce / 125')
        setFridayCheese('1 ounce / 30')
        setFridayWrap('2')
        
        setFiR4('760')
        setFiR4p('46')

        // 3070

        
        //Sa R1
        setSaturdayEggs('2')
        setSaturdayToast('3')
        setSaturdayYaourt('3.5 ounce / 100')

        setSaR1('690')
        setSaR1p('24')

        //Sa R2
        setSaturdayRmeat('3.5 oz / 100')
        setSaturdayPasta('7 ounce / 200')
        setSaturdayPesto('1 tbsp')
        setSaturdayOil('1 tbsp')

        setSaR2('810')
        setSaR2p('34')


        // sa R3
        setSaturdaySnackEggs('2')
        setSaturdayMilk('200')
        setSaturdayHam('3')
        setSaturdayDark('2 square')
        setSaturdayPb('1 tbsp / 30')

        setSaR3('870')
        setSaR3p('34')



        // Sa R4
        setSaturdayTofu('5.5 ounce / 150')
        setSaturdayBeans('2 ounce / 60g')
        setSaturdayCashew('1/2 ounce / 15g ')

        setSaR4('730')
        setSaR4p('35')

// 3040


        //Su R1 
        setPankakesButter('.3 ounce / 10')
        setPankakesDark('2 square / 20')
        setPankakesFarine('4.5 ounce / 130')
        setPankakesEggs('2')
        setPankakesMapple('2 tbsp / 20')
        setPankakesMilk('11.5 fl oz / 350')
        setPankakesOats('6 ounce / 170')
        
        
        setSuR1('80')
        setSuR1p('27')
        setSuR3('820')
        setSuR3p('28')
        

        // Su R2
        setSundayCheese('1 ounce / 30')
        setSundayRmeat('3.5 ounce / 150')
        setSundaySweetP('3.5 ounce / 100')
        setSuR2('820')
        setSuR2p('49')
        

        // Su R4
        setSundayRiz('7 ounce / 200')
        setSundayEggs('2')
        setSundayPeanut('1 ounce / 30')
        setSundayVegeteble('3.5 ounce / 100')
        setSundayOil('1 tbsp of oil')
        setSuR4('750')
        setSuR4p('33')


        // 3050
}



}









// Breakfast 
const [breakfastOeufs, setBreakfastOeufs] = useState('3')
const [breakfastWrap, setBreakfastWraps] = useState('1')
const [mondayChevre, setMondayChevre] = useState()
const [mondayBreakfastOil, setMondayBreakfastOil] = useState()


//Meal prep
const [mealPrep1Quinoa, setMealPrep1Quinoa] = useState()
const [mealPrep1Chiken, setMealPrep1Chiken] = useState('3.5 ounce / 100')
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
//const [redFruits, setRedFruits] = useState()

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



// setFriday  meal prep
const [mealPrep3Fish, setMealPrep3Fish] = useState('') 
const [mealPrep3Cheese, setMealPrep3Cheese] = useState('')


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


const [ WeR1, setWeR1] = useState()
const [ weR2, setWeR2] = useState()
const [ weR3, setWeR3] = useState()
const [ weR4, setWeR4] = useState()

const [ WeR1p, setWeR1p] = useState()
const [ weR2p, setWeR2p] = useState()
const [ weR3p, setWeR3p] = useState()
const [ weR4p, setWeR4p] = useState()


const [ TuR1, setTuR1] = useState()
const [ tuR2, setTuR2] = useState()
const [ tuR3, setTuR3] = useState()
const [ TuR4, setTuR4] = useState()


const [ TuR1p, setTuR1p] = useState()
const [ tuR2p, setTuR2p] = useState()
const [ tuR3p, setTuR3p] = useState()
const [ TuR4p, setTuR4p] = useState()

const [ FiR1, setFiR1] = useState()
const [ fiR2, setFiR2] = useState()
const [ fiR3, setFiR3] = useState()
const [ fiR4, setFiR4] = useState()

const [ FiR1p, setFiR1p] = useState()
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