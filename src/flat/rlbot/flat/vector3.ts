// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class Vector3 {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Vector3 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

x():number {
  return this.bb!.readFloat32(this.bb_pos);
}

y():number {
  return this.bb!.readFloat32(this.bb_pos + 4);
}

z():number {
  return this.bb!.readFloat32(this.bb_pos + 8);
}

static sizeOf():number {
  return 12;
}

static createVector3(builder:flatbuffers.Builder, x: number, y: number, z: number):flatbuffers.Offset {
  builder.prep(4, 12);
  builder.writeFloat32(z);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
}


unpack(): Vector3T {
  return new Vector3T(
    this.x(),
    this.y(),
    this.z()
  );
}


unpackTo(_o: Vector3T): void {
  _o.x = this.x();
  _o.y = this.y();
  _o.z = this.z();
}
}

export class Vector3T {
constructor(
  public x: number = 0.0,
  public y: number = 0.0,
  public z: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return Vector3.createVector3(builder,
    this.x,
    this.y,
    this.z
  );
}
}
