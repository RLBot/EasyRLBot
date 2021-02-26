"use strict";
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some minor changes were made to make it compatible with this codebase.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    information: {
        IGotIt: 0,
        NeedBoost: 1,
        TakeTheShot: 2,
        Defending: 3,
        GoForIt: 4,
        Centering: 5,
        AllYours: 6,
        InPosition: 7,
        Incoming: 8,
        NiceShot: 9,
        GreatPass: 10,
        Thanks: 11,
        WhatASave: 12,
        NiceOne: 13,
        WhatAPlay: 14,
        GreatClear: 15,
        NiceBlock: 16,
    },
    compliments: {
        NiceShot: 9,
        GreatPass: 10,
        Thanks: 11,
        WhatASave: 12,
        NiceOne: 13,
        WhatAPlay: 14,
        GreatClear: 15,
        NiceBlock: 16,
    },
    reactions: {
        OMG: 17,
        Noooo: 18,
        Wow: 19,
        CloseOne: 20,
        NoWay: 21,
        HolyCow: 22,
        Whew: 23,
        Siiiick: 24,
        Calculated: 25,
        Savage: 26,
        Okay: 27,
    },
    apologies: {
        Cursing: 28,
        NoProblem: 29,
        Whoops: 30,
        Sorry: 31,
        MyBad: 32,
        Oops: 33,
        MyFault: 34,
    },
    postGame: {
        Gg: 35,
        WellPlayed: 36,
        ThatWasFun: 37,
        Rematch: 38,
        OneMoreGame: 39,
        WhatAGame: 40,
        NiceMoves: 41,
        EverybodyDance: 42,
    },
    custom: {
        /// Waste of CPU cycles
        Toxic_WasteCPU: 44,
        /// Git gud*
        Toxic_GitGut: 45,
        /// De-Allocate Yourself
        Toxic_DeAlloc: 46,
        /// 404: Your skill not found
        Toxic_404NoSkill: 47,
        /// Get a virus
        Toxic_CatchVirus: 48,
        /// Passing!
        Useful_Passing: 49,
        /// Faking!
        Useful_Faking: 50,
        /// Demoing!
        Useful_Demoing: 51,
        /// BOOPING
        Useful_Bumping: 52,
        /// The chances of that was 47525 to 1*
        Compliments_TinyChances: 53,
        /// Who upped your skill level?
        Compliments_SkillLevel: 54,
        /// Your programmer should be proud
        Compliments_proud: 55,
        /// You're the GC of Bots
        Compliments_GC: 56,
        /// Are you <Insert Pro>Bot? *
        Compliments_Pro: 57,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tDZGhhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUXVpY2tDZGhhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJKQUEySjs7QUFFM0osa0JBQWU7SUFDYixXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSxDQUFDO1FBQ1osV0FBVyxFQUFFLENBQUM7UUFDZCxTQUFTLEVBQUUsQ0FBQztRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7UUFDWCxRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEVBQUU7UUFDVixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEVBQUU7UUFDVixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsU0FBUyxFQUFFLEVBQUU7UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxHQUFHLEVBQUUsRUFBRTtRQUNQLEtBQUssRUFBRSxFQUFFO1FBQ1QsR0FBRyxFQUFFLEVBQUU7UUFDUCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsVUFBVSxFQUFFLEVBQUU7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixjQUFjLEVBQUUsRUFBRTtLQUNuQjtJQUNELE1BQU0sRUFBRTtRQUNOLHVCQUF1QjtRQUN2QixjQUFjLEVBQUUsRUFBRTtRQUNsQixZQUFZO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsd0JBQXdCO1FBQ3hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLDZCQUE2QjtRQUM3QixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLFlBQVk7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXO1FBQ1gsYUFBYSxFQUFFLEVBQUU7UUFDakIsWUFBWTtRQUNaLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFdBQVc7UUFDWCxjQUFjLEVBQUUsRUFBRTtRQUNsQix1Q0FBdUM7UUFDdkMsdUJBQXVCLEVBQUUsRUFBRTtRQUMzQiwrQkFBK0I7UUFDL0Isc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixtQ0FBbUM7UUFDbkMsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQix5QkFBeUI7UUFDekIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsOEJBQThCO1FBQzlCLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0NBQ0YsQ0FBQyJ9