// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { PredictionSlice, PredictionSliceT } from '../../rlbot/flat/prediction-slice';


export class BallPrediction {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BallPrediction {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsBallPrediction(bb:flatbuffers.ByteBuffer, obj?:BallPrediction):BallPrediction {
  return (obj || new BallPrediction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsBallPrediction(bb:flatbuffers.ByteBuffer, obj?:BallPrediction):BallPrediction {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new BallPrediction()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * A list of places the ball will be at specific times in the future.
 * It is guaranteed to sorted so that time increases with each slice.
 * It is NOT guaranteed to have a consistent amount of time between slices.
 */
slices(index: number, obj?:PredictionSlice):PredictionSlice|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new PredictionSlice()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

slicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startBallPrediction(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addSlices(builder:flatbuffers.Builder, slicesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, slicesOffset, 0);
}

static createSlicesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startSlicesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endBallPrediction(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createBallPrediction(builder:flatbuffers.Builder, slicesOffset:flatbuffers.Offset):flatbuffers.Offset {
  BallPrediction.startBallPrediction(builder);
  BallPrediction.addSlices(builder, slicesOffset);
  return BallPrediction.endBallPrediction(builder);
}

unpack(): BallPredictionT {
  return new BallPredictionT(
    this.bb!.createObjList(this.slices.bind(this), this.slicesLength())
  );
}


unpackTo(_o: BallPredictionT): void {
  _o.slices = this.bb!.createObjList(this.slices.bind(this), this.slicesLength());
}
}

export class BallPredictionT {
constructor(
  public slices: (PredictionSliceT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const slices = BallPrediction.createSlicesVector(builder, builder.createObjectOffsetList(this.slices));

  return BallPrediction.createBallPrediction(builder,
    slices
  );
}
}