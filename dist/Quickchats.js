"use strict";
// This file is copied from RLBotJS by SuperVK. It is translated into typescript and some minor changes were made to make it compatible with this codebase.
exports.__esModule = true;
exports["default"] = {
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
        NiceBlock: 16
    },
    compliments: {
        NiceShot: 9,
        GreatPass: 10,
        Thanks: 11,
        WhatASave: 12,
        NiceOne: 13,
        WhatAPlay: 14,
        GreatClear: 15,
        NiceBlock: 16
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
        Okay: 27
    },
    apologies: {
        Cursing: 28,
        NoProblem: 29,
        Whoops: 30,
        Sorry: 31,
        MyBad: 32,
        Oops: 33,
        MyFault: 34
    },
    postGame: {
        Gg: 35,
        WellPlayed: 36,
        ThatWasFun: 37,
        Rematch: 38,
        OneMoreGame: 39,
        WhatAGame: 40,
        NiceMoves: 41,
        EverybodyDance: 42
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
        Compliments_Pro: 57
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tDaGF0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9RdWlja0NoYXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwySkFBMko7O0FBRTNKLHFCQUFlO0lBQ2IsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLENBQUM7UUFDVCxTQUFTLEVBQUUsQ0FBQztRQUNaLFdBQVcsRUFBRSxDQUFDO1FBQ2QsU0FBUyxFQUFFLENBQUM7UUFDWixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO1FBQ1gsUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNkO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxFQUFFO1FBQ1YsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNkO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsR0FBRyxFQUFFLEVBQUU7UUFDUCxLQUFLLEVBQUUsRUFBRTtRQUNULEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLFVBQVUsRUFBRSxFQUFFO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sVUFBVSxFQUFFLEVBQUU7UUFDZCxVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxFQUFFO1FBQ1gsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO1FBQ2IsY0FBYyxFQUFFLEVBQUU7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDTix1QkFBdUI7UUFDdkIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsWUFBWTtRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLHdCQUF3QjtRQUN4QixhQUFhLEVBQUUsRUFBRTtRQUNqQiw2QkFBNkI7UUFDN0IsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixlQUFlO1FBQ2YsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixZQUFZO1FBQ1osY0FBYyxFQUFFLEVBQUU7UUFDbEIsV0FBVztRQUNYLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFlBQVk7UUFDWixjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXO1FBQ1gsY0FBYyxFQUFFLEVBQUU7UUFDbEIsdUNBQXVDO1FBQ3ZDLHVCQUF1QixFQUFFLEVBQUU7UUFDM0IsK0JBQStCO1FBQy9CLHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsbUNBQW1DO1FBQ25DLGlCQUFpQixFQUFFLEVBQUU7UUFDckIseUJBQXlCO1FBQ3pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLDhCQUE4QjtRQUM5QixlQUFlLEVBQUUsRUFBRTtLQUNwQjtDQUNGLENBQUMifQ==