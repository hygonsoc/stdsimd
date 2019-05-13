var N=null,E="",T="t",U="u",searchIndex={};
var R=["Reverse the order of the bytes.","_rev_u16","_rev_u32","Count Leading Zeros.","int16x2_t","Insert a SMULTB instruction","int8x4_t","Returns the 16-bit signed saturated equivalent of","uint8x4_t","result","try_from","try_into","borrow_mut","type_id","borrow","typeid","formatter","uint16x2_t"];
searchIndex["core_arch"]={"doc":"SIMD and vendor intrinsics module.","i":[[0,"arm","core_arch","Platform-specific intrinsics for the `arm` platform.",N,N],[3,"SY","core_arch::arm","Full system is the required shareability domain, reads and…",N,N],[3,"ST",E,"Full system is the required shareability domain, writes…",N,N],[3,"ISH",E,"Inner Shareable is the required shareability domain, reads…",N,N],[3,"ISHST",E,"Inner Shareable is the required shareability domain,…",N,N],[3,"NSH",E,"Non-shareable is the required shareability domain, reads…",N,N],[3,"NSHST",E,"Non-shareable is the required shareability domain, writes…",N,N],[3,"OSH",E,"Outer Shareable is the required shareability domain, reads…",N,N],[3,"OSHST",E,"Outer Shareable is the required shareability domain,…",N,N],[3,"APSR",E,"Application Program Status Register",N,N],[3,R[4],E,"ARM-specific 32-bit wide vector of two packed `i16`.",N,N],[3,R[17],E,"ARM-specific 32-bit wide vector of two packed `u16`.",N,N],[3,R[6],E,"ARM-specific 32-bit wide vector of four packed `i8`.",N,N],[3,R[8],E,"ARM-specific 32-bit wide vector of four packed `u8`.",N,N],[5,"__breakpoint",E,"Inserts a breakpoint instruction.",N,[[["i32"]]]],[5,R[1],E,R[0],N,[[["u16"]],["u16"]]],[5,R[2],E,R[0],N,[[["u32"]],["u32"]]],[5,R[1],E,R[0],N,[[["u16"]],["u16"]]],[5,R[2],E,R[0],N,[[["u32"]],["u32"]]],[5,"_clz_u8",E,R[3],N,[[["u8"]],["u8"]]],[5,"_clz_u16",E,R[3],N,[[["u16"]],["u16"]]],[5,"_clz_u32",E,R[3],N,[[["u32"]],["u32"]]],[5,"_rbit_u32",E,"Reverse the bit order.",N,[[["u32"]],["u32"]]],[5,"__dmb",E,"Generates a DMB (data memory barrier) instruction or…",N,[[["a"]]]],[5,"__dsb",E,"Generates a DSB (data synchronization barrier) instruction…",N,[[["a"]]]],[5,"__isb",E,"Generates an ISB (instruction synchronization barrier)…",N,[[["a"]]]],[5,"__wfi",E,"Generates a WFI (wait for interrupt) hint instruction, or…",N,[[]]],[5,"__wfe",E,"Generates a WFE (wait for event) hint instruction, or…",N,[[]]],[5,"__sev",E,"Generates a SEV (send a global event) hint instruction.",N,[[]]],[5,"__yield",E,"Generates a YIELD hint instruction.",N,[[]]],[5,"__dbg",E,"Generates a DBG instruction.",N,[[["u32"]]]],[5,"__nop",E,"Generates an unspecified no-op instruction.",N,[[]]],[5,"__rsr",E,"Reads a 32-bit system register",N,[[["r"]],["u32"]]],[5,"__rsrp",E,"Reads a system register containing an address",N,[[["r"]]]],[5,"__wsr",E,"Writes a 32-bit system register",N,[[["u32"],["r"]]]],[5,"__wsrp",E,"Writes a system register containing an address",N,[[["r"]]]],[5,"__clrex",E,"Removes the exclusive lock created by LDREX",N,[[]]],[5,"__ldrexb",E,"Executes a exclusive LDR instruction for 8 bit value.",N,[[],["u8"]]],[5,"__ldrexh",E,"Executes a exclusive LDR instruction for 16 bit value.",N,[[],["u16"]]],[5,"__ldrex",E,"Executes a exclusive LDR instruction for 32 bit value.",N,[[],["u32"]]],[5,"__strexb",E,"Executes a exclusive STR instruction for 8 bit values",N,[[["u32"]],["u32"]]],[5,"__strexh",E,"Executes a exclusive STR instruction for 16 bit values",N,[[["u16"]],["u32"]]],[5,"__strex",E,"Executes a exclusive STR instruction for 32 bit values",N,[[["u32"]],["u32"]]],[5,"__smulbb",E,"Insert a SMULBB instruction",N,[[[R[4]]],["i32"]]],[5,"__smultb",E,R[5],N,[[[R[4]]],["i32"]]],[5,"__smulbt",E,R[5],N,[[[R[4]]],["i32"]]],[5,"__smultt",E,"Insert a SMULTT instruction",N,[[[R[4]]],["i32"]]],[5,"__smulwb",E,"Insert a SMULWB instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smulwt",E,"Insert a SMULWT instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__qadd",E,"Signed saturating addition",N,[[["i32"]],["i32"]]],[5,"__qsub",E,"Signed saturating subtraction",N,[[["i32"]],["i32"]]],[5,"__qdbl",E,"Insert a QADD instruction",N,[[["i32"]],["i32"]]],[5,"__smlabb",E,"Insert a SMLABB instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlabt",E,"Insert a SMLABT instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlatb",E,"Insert a SMLATB instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlatt",E,"Insert a SMLATT instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlawb",E,"Insert a SMLAWB instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlawt",E,"Insert a SMLAWT instruction",N,[[[R[4]],["i32"]],["i32"]]],[5,"__qadd8",E,"Saturating four 8-bit integer additions",N,[[[R[6]]],[R[6]]]],[5,"__qsub8",E,"Saturating two 8-bit integer subtraction",N,[[[R[6]]],[R[6]]]],[5,"__qsub16",E,"Saturating two 16-bit integer subtraction",N,[[[R[4]]],[R[4]]]],[5,"__qadd16",E,"Saturating two 16-bit integer additions",N,[[[R[4]]],[R[4]]]],[5,"__qasx",E,R[7],N,[[[R[4]]],[R[4]]]],[5,"__qsax",E,R[7],N,[[[R[4]]],[R[4]]]],[5,"__sadd16",E,R[7],N,[[[R[4]]],[R[4]]]],[5,"__sadd8",E,"Returns the 8-bit signed saturated equivalent of",N,[[[R[6]]],[R[6]]]],[5,"__smlad",E,"Dual 16-bit Signed Multiply with Addition of products and…",N,[[[R[4]],["i32"]],["i32"]]],[5,"__smlsd",E,"Dual 16-bit Signed Multiply with Subtraction of products…",N,[[[R[4]],["i32"]],["i32"]]],[5,"__sasx",E,"Returns the 16-bit signed equivalent of",N,[[[R[4]]],[R[4]]]],[5,"__sel",E,"Select bytes from each operand according to APSR GE flags",N,[[[R[6]]],[R[6]]]],[5,"__shadd8",E,"Signed halving parallel byte-wise addition.",N,[[[R[6]]],[R[6]]]],[5,"__shadd16",E,"Signed halving parallel halfword-wise addition.",N,[[[R[4]]],[R[4]]]],[5,"__shsub8",E,"Signed halving parallel byte-wise subtraction.",N,[[[R[6]]],[R[6]]]],[5,"__usub8",E,"Inserts a `USUB8` instruction.",N,[[[R[8]]],[R[8]]]],[5,"__ssub8",E,"Inserts a `SSUB8` instruction.",N,[[[R[6]]],[R[6]]]],[5,"__shsub16",E,"Signed halving parallel halfword-wise subtraction.",N,[[[R[4]]],[R[4]]]],[5,"__smuad",E,"Signed Dual Multiply Add.",N,[[[R[4]]],["i32"]]],[5,"__smuadx",E,"Signed Dual Multiply Add Reversed.",N,[[[R[4]]],["i32"]]],[5,"__smusd",E,"Signed Dual Multiply Subtract.",N,[[[R[4]]],["i32"]]],[5,"__smusdx",E,"Signed Dual Multiply Subtract Reversed.",N,[[[R[4]]],["i32"]]],[5,"__usad8",E,"Sum of 8-bit absolute differences.",N,[[[R[6]]],["u32"]]],[5,"__usada8",E,"Sum of 8-bit absolute differences and constant.",N,[[[R[6]],["u32"]],["u32"]]],[5,"udf",E,"Generates the trap instruction `UDF`",N,[[]]],[11,R[10],E,E,0,[[[U]],[R[9]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[11],E,E,0,[[],[R[9]]]],[11,R[14],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[R[15]]]],[11,R[10],E,E,1,[[[U]],[R[9]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[11],E,E,1,[[],[R[9]]]],[11,R[14],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[R[15]]]],[11,R[10],E,E,2,[[[U]],[R[9]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[11],E,E,2,[[],[R[9]]]],[11,R[14],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"]],[R[15]]]],[11,R[10],E,E,3,[[[U]],[R[9]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[11],E,E,3,[[],[R[9]]]],[11,R[14],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[["self"]],[R[15]]]],[11,R[10],E,E,4,[[[U]],[R[9]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[11],E,E,4,[[],[R[9]]]],[11,R[14],E,E,4,[[["self"]],[T]]],[11,R[12],E,E,4,[[["self"]],[T]]],[11,R[13],E,E,4,[[["self"]],[R[15]]]],[11,R[10],E,E,5,[[[U]],[R[9]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[11],E,E,5,[[],[R[9]]]],[11,R[14],E,E,5,[[["self"]],[T]]],[11,R[12],E,E,5,[[["self"]],[T]]],[11,R[13],E,E,5,[[["self"]],[R[15]]]],[11,R[10],E,E,6,[[[U]],[R[9]]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[11],E,E,6,[[],[R[9]]]],[11,R[14],E,E,6,[[["self"]],[T]]],[11,R[12],E,E,6,[[["self"]],[T]]],[11,R[13],E,E,6,[[["self"]],[R[15]]]],[11,R[10],E,E,7,[[[U]],[R[9]]]],[11,"into",E,E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[11],E,E,7,[[],[R[9]]]],[11,R[14],E,E,7,[[["self"]],[T]]],[11,R[12],E,E,7,[[["self"]],[T]]],[11,R[13],E,E,7,[[["self"]],[R[15]]]],[11,R[10],E,E,8,[[[U]],[R[9]]]],[11,"into",E,E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[11],E,E,8,[[],[R[9]]]],[11,R[14],E,E,8,[[["self"]],[T]]],[11,R[12],E,E,8,[[["self"]],[T]]],[11,R[13],E,E,8,[[["self"]],[R[15]]]],[11,R[10],E,E,9,[[[U]],[R[9]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[11],E,E,9,[[],[R[9]]]],[11,R[14],E,E,9,[[["self"]],[T]]],[11,R[12],E,E,9,[[["self"]],[T]]],[11,R[13],E,E,9,[[["self"]],[R[15]]]],[11,R[10],E,E,10,[[[U]],[R[9]]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[11],E,E,10,[[],[R[9]]]],[11,R[14],E,E,10,[[["self"]],[T]]],[11,R[12],E,E,10,[[["self"]],[T]]],[11,R[13],E,E,10,[[["self"]],[R[15]]]],[11,R[10],E,E,11,[[[U]],[R[9]]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[11],E,E,11,[[],[R[9]]]],[11,R[14],E,E,11,[[["self"]],[T]]],[11,R[12],E,E,11,[[["self"]],[T]]],[11,R[13],E,E,11,[[["self"]],[R[15]]]],[11,R[10],E,E,12,[[[U]],[R[9]]]],[11,"into",E,E,12,[[],[U]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[11],E,E,12,[[],[R[9]]]],[11,R[14],E,E,12,[[["self"]],[T]]],[11,R[12],E,E,12,[[["self"]],[T]]],[11,R[13],E,E,12,[[["self"]],[R[15]]]],[11,"fmt",E,E,9,[[[R[16]],["self"]],[R[9]]]],[11,"fmt",E,E,10,[[[R[16]],["self"]],[R[9]]]],[11,"fmt",E,E,11,[[[R[16]],["self"]],[R[9]]]],[11,"fmt",E,E,12,[[[R[16]],["self"]],[R[9]]]],[11,"clone",E,E,9,[[["self"]],[R[4]]]],[11,"clone",E,E,10,[[["self"]],[R[17]]]],[11,"clone",E,E,11,[[["self"]],[R[6]]]],[11,"clone",E,E,12,[[["self"]],[R[8]]]]],"p":[[3,"SY"],[3,"ST"],[3,"ISH"],[3,"ISHST"],[3,"NSH"],[3,"NSHST"],[3,"OSH"],[3,"OSHST"],[3,"APSR"],[3,R[4]],[3,R[17]],[3,R[6]],[3,R[8]]]};
searchIndex["std_detect"]={"doc":"Run-time feature detection for the Rust standard library.","i":[[14,"is_x86_feature_detected","std_detect","Prevents compilation if `is_x86_feature_detected` is used…",N,N],[14,"is_aarch64_feature_detected",E,"Prevents compilation if `is_aarch64_feature_detected` is…",N,N],[14,"is_powerpc_feature_detected",E,"Prevents compilation if `is_powerpc_feature_detected` is…",N,N],[14,"is_powerpc64_feature_detected",E,"Prevents compilation if `is_powerpc64_feature_detected` is…",N,N],[14,"is_mips_feature_detected",E,"Prevents compilation if `is_mips_feature_detected` is used…",N,N],[14,"is_mips64_feature_detected",E,"Prevents compilation if `is_mips64_feature_detected` is…",N,N],[14,"is_arm_feature_detected",E,"Checks if `arm` feature is enabled.",N,N]],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);